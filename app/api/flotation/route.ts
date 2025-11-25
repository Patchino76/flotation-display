import { NextResponse } from "next/server";
import { getLatestFlotationData } from "@/lib/db";

export const dynamic = "force-dynamic"; // Ensure the route is not cached

export async function GET() {
  try {
    const data = await getLatestFlotationData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch flotation data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
