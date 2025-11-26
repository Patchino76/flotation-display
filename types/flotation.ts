export interface FlotationData {
  // Main extraction percentage
  extraction: number;

  // Left column parameters (1p, 2p, 3p)
  p1: number;
  p2: number;
  p3: number;

  // Right column top parameters (4p, 5p, CD)
  p4: number;
  p5: number;
  cd: number;

  pP: number; // P indicator value (row 1)
  pK: number; // K indicator value (row 2)
  pO: number; // CD extra value (row 3)

  // O parameters
  p0: number;

  // Date and time
  date: string;
  time: string;
}

export const defaultFlotationData: FlotationData = {
  extraction: 0.0,
  p1: 0,
  p2: 0.0,
  p3: 0,
  p4: 0.0,
  p5: 0.0,
  cd: 0,
  pP: 0.0,
  pK: 0.0,
  pO: 0,
  p0: 0,
  date: "00.00.0000",
  time: "00:00",
};
