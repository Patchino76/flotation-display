const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

console.log("Checking DB connection...");
console.log("DATABASE_URL present:", !!process.env.DATABASE_URL);

async function check() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is missing");
    return;
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    console.log("Connected to database");

    const res = await client.query(`
      SELECT n.nspname as "schema",
             c.relname as "table"
      FROM pg_class c
      LEFT JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relkind = 'r'
      AND n.nspname NOT IN ('pg_catalog', 'information_schema')
      ORDER BY 1, 2;
    `);

    if (res.rows.length === 0) {
      console.log("No tables found in any user schema.");
    } else {
      console.log("Tables found:");
      res.rows.forEach((row) => {
        console.log(`- ${row.schema}.${row.table}`);
      });
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();
  }
}

check();
