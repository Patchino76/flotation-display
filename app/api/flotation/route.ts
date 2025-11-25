import { NextResponse } from "next/server"
import type { FlotationData } from "@/types/flotation"

// This is a mock API route that proxies to your FastAPI backend
// Replace the URL with your actual FastAPI endpoint

const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000"

export async function GET() {
  try {
    // Option 1: Proxy to FastAPI backend (uncomment when ready)
    // const response = await fetch(`${FASTAPI_URL}/flotation`);
    // const data = await response.json();
    // return NextResponse.json(data);

    // Option 2: Return mock data for development
    const mockData: FlotationData = {
      extraction: 0.0,
      p1: 0,
      p2: 0.0,
      p3: 0,
      p4: 0.0,
      p5: 0.0,
      cd: 0,
      pP: 0.0,
      pK: 0.0,
      cdVal: 0,
      op: 0,
      oo: 0,
      o1k: 0.0,
      o2k: 0.0,
      o1o: 0,
      o2o: 0,
      date: "25.11.2025",
      time: "09:34",
    }

    return NextResponse.json(mockData)
  } catch (error) {
    console.error("Failed to fetch flotation data:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
