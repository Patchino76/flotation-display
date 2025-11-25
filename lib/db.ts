import sql from "mssql";
import { FLOTATION_TAGS, type FlotationTagKey } from "./flotation-tags";
import { type FlotationData, defaultFlotationData } from "../types/flotation";

const sqlConfig = {
  user: "Pulse_RO",
  password: "PD@T@r3@der",
  database: "pulse",
  server: "10.20.2.10",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // set to true for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

// Singleton for the connection pool to avoid multiple connections in Next.js dev mode
let pool: sql.ConnectionPool | null = null;

export async function getDbConnection() {
  if (pool) {
    return pool;
  }

  try {
    pool = await sql.connect(sqlConfig);
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
}

export async function executeQuery(
  query: string,
  params: { name: string; type: any; value: any }[] = []
) {
  const connection = await getDbConnection();
  const request = connection.request();

  params.forEach((p) => {
    request.input(p.name, p.type, p.value);
  });

  return await request.query(query);
}

export async function getTagValue(tagId: number) {
  // Fetch the latest value for a specific tag
  // Using the query pattern: SELECT TOP 1 ... ORDER BY IndexTime DESC
  const query = `
    SELECT TOP 1 IndexTime, LoggerTagID, Value 
    FROM LoggerValues 
    WHERE LoggerTagID = @tagId 
    ORDER BY IndexTime DESC
  `;

  const result = await executeQuery(query, [
    { name: "tagId", type: sql.Int, value: tagId },
  ]);

  return result.recordset[0];
}

export async function getLatestValuesForTags(tagIds: number[]) {
  if (tagIds.length === 0) return [];

  // Create a parameter for each tag ID or use IN clause
  // For safety with arbitrary lengths, we can construct the query dynamically carefully
  // or just loop. For efficiency with SQL Server, a single query with IN is better.

  const tagList = tagIds.join(",");
  // Note: In a real app, validate tagList is only numbers to prevent SQL injection if not using params.
  // Since tagIds is number[], it's safe.

  // To get the latest for EACH tag, we can use a window function
  const query = `
      WITH RankedValues AS (
        SELECT 
          IndexTime, 
          LoggerTagID, 
          Value,
          ROW_NUMBER() OVER (PARTITION BY LoggerTagID ORDER BY IndexTime DESC) as rn
        FROM LoggerValues
        WHERE LoggerTagID IN (${tagList})
      )
      SELECT IndexTime, LoggerTagID, Value
      FROM RankedValues
      WHERE rn = 1
    `;

  const result = await executeQuery(query);
  return result.recordset;
}

export async function getLatestFlotationData(): Promise<FlotationData> {
  // Get all unique tag IDs from the configuration
  const tagIds = Array.from(new Set(Object.values(FLOTATION_TAGS))) as number[];

  // Fetch the latest values for these tags
  const latestValues = await getLatestValuesForTags(tagIds);

  // Map results by TagID for easy lookup
  const valueMap = new Map<number, { value: number; time: Date }>();
  let latestTime: Date | null = null;

  latestValues.forEach((row: any) => {
    valueMap.set(row.LoggerTagID, {
      value: row.Value,
      time: row.IndexTime,
    });

    // Keep track of the most recent timestamp seen across all tags
    if (!latestTime || new Date(row.IndexTime) > latestTime) {
      latestTime = new Date(row.IndexTime);
    }
  });

  // Build the result object matching FlotationData interface
  // We start with default values and override with what we found in DB
  const result: FlotationData = { ...defaultFlotationData };

  // Map each parameter in FLOTATION_TAGS to its value from the DB
  (Object.keys(FLOTATION_TAGS) as FlotationTagKey[]).forEach((key) => {
    const tagId = FLOTATION_TAGS[key];
    const entry = valueMap.get(tagId);

    if (entry) {
      // @ts-ignore - We know the keys match FlotationData except date/time
      result[key] = entry.value;
    }
  });

  // Format the date and time from the latest timestamp found
  if (latestTime) {
    const d = new Date(latestTime);
    // Format as DD.MM.YYYY
    result.date = `${d.getDate().toString().padStart(2, "0")}.${(
      d.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${d.getFullYear()}`;
    // Format as HH:mm
    result.time = `${d.getHours().toString().padStart(2, "0")}.${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return result;
}
