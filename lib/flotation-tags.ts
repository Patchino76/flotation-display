export const FLOTATION_TAGS = {
  extraction: 1790,
  p1: 1430,
  p4: 1433,
  pP: 1435,
  p2: 1431,
  p5: 1434,
  pK: 1438,
  p3: 1432,
  cd: 1436,
  pO: 1600,
  op: 3284,
  oo: 3285,
  o1k: 3283,
  o2k: 3281,
  o1o: 3282,
  o2o: 3280,
} as const;

export type FlotationTagKey = keyof typeof FLOTATION_TAGS;
