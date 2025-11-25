"use client";

import { FlotationDisplay } from "@/components/flotation-display";

// Mock data to demonstrate the display
const initialData = {
  extraction: 85.5,
  p1: 120,
  p4: 0.456,
  pP: 12.34,
  p2: 0.789,
  p5: 0.123,
  pK: 45.67,
  p3: 150,
  cd: 80,
  cdVal: 0,
  op: 90,
  oo: 10,
  o1k: 1.23,
  o2k: 4.56,
  o1o: 20,
  o2o: 30,
  date: "01.01.2024",
  time: "12:00",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-4">
      <FlotationDisplay data={initialData} />
    </main>
  );
}
