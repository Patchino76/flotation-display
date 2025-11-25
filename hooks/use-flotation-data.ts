"use client"

import { useState, useEffect, useCallback } from "react"
import { type FlotationData, defaultFlotationData } from "@/types/flotation"

interface UseFlotationDataOptions {
  apiUrl?: string
  pollingInterval?: number // in milliseconds
  enabled?: boolean
}

interface UseFlotationDataReturn {
  data: FlotationData
  isLoading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export function useFlotationData(options: UseFlotationDataOptions = {}): UseFlotationDataReturn {
  const {
    apiUrl = "/api/flotation", // Default to local proxy or set your FastAPI URL
    pollingInterval = 0, // Set to > 0 to enable polling
    enabled = true,
  } = options

  const [data, setData] = useState<FlotationData>(defaultFlotationData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    if (!enabled) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: FlotationData = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch data"))
      // Keep showing last valid data on error
    } finally {
      setIsLoading(false)
    }
  }, [apiUrl, enabled])

  // Initial fetch and polling setup
  useEffect(() => {
    if (!enabled) return

    fetchData()

    if (pollingInterval > 0) {
      const intervalId = setInterval(fetchData, pollingInterval)
      return () => clearInterval(intervalId)
    }
  }, [fetchData, pollingInterval, enabled])

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  }
}
