export const FLOTATION_TAGS = {
  extraction: 1,
  p1: 485,
  p4: 488,
  pP: 491,
  p2: 494,
  p5: 497,
  pK: 455,
  p3: 467,
  cd: 476,
  cdVal: 479,
  op: 1485,
  oo: 482,
  o1k: 3786,
  o2k: 461,
  o1o: 474,
  o2o: 509,
} as const;

export type FlotationTagKey = keyof typeof FLOTATION_TAGS;
