"use client";

import type { FlotationData } from "@/types/flotation";

interface FlotationDisplaySmallProps {
  data: FlotationData;
}

export function FlotationDisplaySmall({ data }: FlotationDisplaySmallProps) {
  const formatPercent = (value: number) => value.toFixed(2);
  const formatValue = (value: number, decimals = 2) => value.toFixed(decimals);

  const formatTimeHHmm = (raw: string) => {
    const cleaned = raw.trim().replace(/\s*h\s*$/i, "");
    const sep = cleaned.includes(":")
      ? ":"
      : cleaned.includes(".")
      ? "."
      : cleaned.includes(",")
      ? ","
      : null;

    if (sep) {
      const [hRaw, mRaw] = cleaned.split(sep);
      if (mRaw === undefined) return cleaned;
      const hh = hRaw.padStart(2, "0");
      const mm = mRaw.padStart(2, "0").slice(0, 2);
      return `${hh}:${mm}`;
    }

    if (/^\d{1,2}$/.test(cleaned)) return `${cleaned.padStart(2, "0")}:00`;
    return cleaned;
  };

  const labelColor = "#00ff00";
  const valueColor = "#ff0000";
  const dateColor = "#ffffff";

  return (
    <div
      className="select-none"
      style={{
        position: "relative",
        width: "192px",
        height: "100px",
        backgroundColor: "#1a1a1a",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "13px",
        fontWeight: "bold",
        padding: "4px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "12px",
          lineHeight: "12px",
          marginBottom: "3px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "baseline",
            fontSize: "15px",
            lineHeight: "15px",
            fontWeight: 900,
          }}
        >
          <span style={{ color: labelColor, fontWeight: 900 }}>ИЗВЛИЧАНЕ</span>
          <span style={{ color: "#ffff00" }}>
            {formatPercent(data.extraction)}%
          </span>
        </div>
        <span style={{ color: dateColor }}>{formatTimeHHmm(data.time)}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, auto)",
          gridAutoFlow: "column",
          columnGap: "4px",
          rowGap: "2px",
          fontSize: "13px",
          lineHeight: "13px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>p1</span>
          <span style={{ color: valueColor }}>{formatValue(data.p1, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>p2</span>
          <span style={{ color: valueColor }}>{formatValue(data.p2, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>p3</span>
          <span style={{ color: valueColor }}>{formatValue(data.p3, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>p4</span>
          <span style={{ color: valueColor }}>{formatValue(data.p4, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>p5</span>
          <span style={{ color: valueColor }}>{formatValue(data.p5, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>CD</span>
          <span style={{ color: valueColor }}>{formatValue(data.cd, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>P</span>
          <span style={{ color: valueColor }}>{formatValue(data.pP, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>O</span>
          <span style={{ color: valueColor }}>{formatValue(data.pO, 3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: labelColor }}>K</span>
          <span style={{ color: valueColor }}>{formatValue(data.pK, 3)}</span>
        </div>
      </div>
    </div>
  );
}
