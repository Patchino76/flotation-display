// export const _FLOTATION_TAGS_OLD = {
//   extraction: 1790,
//   p1: 1430,
//   p4: 1433,
//   pP: 1435,
//   p2: 1431,
//   p5: 1434,
//   pK: 1438,
//   p3: 1432,
//   cd: 1436,
//   pO: 1600,
//   p0: 61,
// } as const;

export const FLOTATION_TAGS = {
  extraction: 1790,
  p0: 5586,
  p1: 53,
  p2: 54,
  p3: 55,
  p4: 56,
  p5: 5581,
  pP: 59,
  pK: 76,
  pO: 58,
  cd: 60,
} as const;

export type FlotationTagKey = keyof typeof FLOTATION_TAGS;
