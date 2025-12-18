"use client";

import type { FlotationData } from "@/types/flotation";

interface FlotationDisplaySmallProps {
  data: FlotationData;
}

export function FlotationDisplaySmall({ data }: FlotationDisplaySmallProps) {
  const formatPercent = (value: number) => value.toFixed(2);
  const formatValue = (value: number, decimals = 2) => value.toFixed(decimals);

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
        fontSize: "10px",
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
          fontSize: "11px",
          lineHeight: "12px",
          marginBottom: "2px",
        }}
      >
        <div style={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
          <span style={{ color: labelColor }}>EXTR</span>
          <span style={{ color: "#ffff00" }}>
            {formatPercent(data.extraction)}%
          </span>
        </div>
        <span style={{ color: dateColor }}>{data.time}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "6px",
          rowGap: "1px",
          fontSize: "10px",
          lineHeight: "11px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>p1</span>
          <span style={{ color: valueColor }}>{formatValue(data.p1)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>p4</span>
          <span style={{ color: valueColor }}>{formatValue(data.p4)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>pP</span>
          <span style={{ color: valueColor }}>{formatValue(data.pP)}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>p2</span>
          <span style={{ color: valueColor }}>{formatValue(data.p2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>p5</span>
          <span style={{ color: valueColor }}>{formatValue(data.p5)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>pK</span>
          <span style={{ color: valueColor }}>{formatValue(data.pK)}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>p3</span>
          <span style={{ color: valueColor }}>{formatValue(data.p3)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>cd</span>
          <span style={{ color: valueColor }}>{formatValue(data.cd)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: labelColor }}>pO</span>
          <span style={{ color: valueColor }}>{formatValue(data.pO)}</span>
        </div>
      </div>
    </div>
  );
}
