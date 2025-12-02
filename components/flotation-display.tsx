"use client";

import type { FlotationData } from "@/types/flotation";

interface FlotationDisplayProps {
  data: FlotationData;
}

export function FlotationDisplay({ data }: FlotationDisplayProps) {
  const formatPercent = (value: number) => value.toFixed(2);
  const formatValue = (value: number, decimals = 3) => value.toFixed(decimals);

  const labelColor = "#00ff00";
  const valueColor = "#ff0000";
  const indicatorColor = "#ff00ff";
  const dateColor = "#ffffff";

  // Layout: 7 rows total, 192px height
  // Row 0: Header (ИЗВЛИЧАНЕ) - top: 4px
  // Rows 1-5: Data rows (0p-4p left, 5p/P/K/O/CD right) - 26px spacing
  // Row 6: Date/Time - bottom area

  const rowHeight = 26;
  const row = (n: number) => 4 + n * rowHeight;

  return (
    <div
      className="select-none"
      style={{
        position: "relative",
        width: "192px",
        height: "192px",
        backgroundColor: "#1a1a1a",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {/* Row 0: ИЗВЛИЧАНЕ: 0.00 % */}
      <span
        style={{
          position: "absolute",
          top: `${row(0)}px`,
          left: "4px",
          color: labelColor,
          fontSize: "18px",
        }}
      >
        ИЗВЛИЧАНЕ:
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(0)}px`,
          left: "115px",
          color: "#ffff00",
          fontSize: "18px",
        }}
      >
        {formatPercent(data.extraction)}
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(0)}px`,
          left: "172px",
          color: "#ffff00",
          fontSize: "18px",
        }}
      >
        %
      </span>

      {/* Column 1: 0p, 1p, 2p, 3p, 4p */}
      {/* Row 1: 0p */}
      <span
        style={{
          position: "absolute",
          top: `${row(1)}px`,
          left: "4px",
          color: labelColor,
        }}
      >
        0p
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(1)}px`,
          left: "35px",
          color: valueColor,
        }}
      >
        {formatValue(data.p0)}
      </span>

      {/* Row 2: 1p */}
      <span
        style={{
          position: "absolute",
          top: `${row(2)}px`,
          left: "4px",
          color: labelColor,
        }}
      >
        1p
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(2)}px`,
          left: "35px",
          color: valueColor,
        }}
      >
        {formatValue(data.p1)}
      </span>

      {/* Row 3: 2p */}
      <span
        style={{
          position: "absolute",
          top: `${row(3)}px`,
          left: "4px",
          color: labelColor,
        }}
      >
        2p
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(3)}px`,
          left: "35px",
          color: valueColor,
        }}
      >
        {formatValue(data.p2)}
      </span>

      {/* Row 4: 3p */}
      <span
        style={{
          position: "absolute",
          top: `${row(4)}px`,
          left: "4px",
          color: labelColor,
        }}
      >
        3p
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(4)}px`,
          left: "35px",
          color: valueColor,
        }}
      >
        {formatValue(data.p3)}
      </span>

      {/* Row 5: 5p (moved to bottom of column 1) */}
      <span
        style={{
          position: "absolute",
          top: `${row(5)}px`,
          left: "4px",
          color: labelColor,
        }}
      >
        5p
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(5)}px`,
          left: "35px",
          color: valueColor,
        }}
      >
        {formatValue(data.p5)}
      </span>

      {/* Column 2: P, K, O, CD, 4p */}
      {/* Row 1: P */}
      <span
        style={{
          position: "absolute",
          top: `${row(1)}px`,
          left: "100px",
          color: labelColor,
        }}
      >
        P
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(1)}px`,
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.pP)}
      </span>

      {/* Row 2: K */}
      <span
        style={{
          position: "absolute",
          top: `${row(2)}px`,
          left: "100px",
          color: labelColor,
        }}
      >
        K
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(2)}px`,
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.pK)}
      </span>

      {/* Row 3: O */}
      <span
        style={{
          position: "absolute",
          top: `${row(3)}px`,
          left: "100px",
          color: labelColor,
        }}
      >
        O
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(3)}px`,
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.pO)}
      </span>

      {/* Row 4: CD */}
      <span
        style={{
          position: "absolute",
          top: `${row(4)}px`,
          left: "100px",
          color: labelColor,
        }}
      >
        CD
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(4)}px`,
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.cd)}
      </span>

      {/* Row 5: 4p (moved to bottom of column 2) */}
      <span
        style={{
          position: "absolute",
          top: `${row(5)}px`,
          left: "100px",
          color: labelColor,
        }}
      >
        4p
      </span>
      <span
        style={{
          position: "absolute",
          top: `${row(5)}px`,
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.p4)}
      </span>

      {/* Bottom row: Date and Time with border */}
      <div
        style={{
          position: "absolute",
          top: "168px",
          left: "4px",
          right: "4px",
          borderTop: "2px solid #444",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "172px",
          left: "4px",
          color: dateColor,
        }}
      >
        {data.date}
      </span>
      <span
        style={{
          position: "absolute",
          top: "172px",
          left: "120px",
          color: dateColor,
        }}
      >
        {data.time} h
      </span>
    </div>
  );
}
