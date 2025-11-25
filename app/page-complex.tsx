"use client"

import { FlotationDisplay } from "@/components/flotation-display"
import { useFlotationData } from "@/hooks/use-flotation-data"

export default function Home() {
  // Use the custom hook - configure with your FastAPI endpoint
  // Example: useFlotationData({ apiUrl: "http://localhost:8000/api/flotation", pollingInterval: 1000 })
  const { data } = useFlotationData({
    enabled: false, // Set to true when API is ready
  })

  return (
    <main className="min-h-screen bg-black">
      <FlotationDisplay data={data} />
    </main>
  )
}
