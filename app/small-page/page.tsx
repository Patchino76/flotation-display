"use client";

import { FlotationDisplaySmall } from "./components/flotation-display-small";
import { useFlotationData } from "@/hooks/use-flotation-data";

export default function SmallPage() {
  const { data } = useFlotationData({
    pollingInterval: 20000, // Poll every 20 seconds
  });

  return (
    <main className="min-h-screen bg-black flex justify-start items-start">
      <FlotationDisplaySmall data={data} />
    </main>
  );
}
