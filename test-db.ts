import { getLatestFlotationData } from "./lib/db";

async function main() {
  try {
    console.log("Connecting to database and fetching latest flotation data...");
    const data = await getLatestFlotationData();
    console.log("Successfully fetched data:");
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    process.exit(0);
  }
}

main();
