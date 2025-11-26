"use client";

import { FlotationDisplay } from "@/components/flotation-display";
import { useFlotationData } from "@/hooks/use-flotation-data";

export default function Home() {
  const { data } = useFlotationData({
    pollingInterval: 20000, // Poll every 20 seconds
  });

  return (
    <main className="min-h-screen bg-black flex justify-start items-start">
      <FlotationDisplay data={data} />
    </main>
  );
}
