"use client";

import type { FlotationData } from "@/types/flotation";

interface FlotationDisplayProps {
  data: FlotationData;
}

export function FlotationDisplay({ data }: FlotationDisplayProps) {
  const formatPercent = (value: number) => value.toFixed(2);
  const formatValue = (value: number, decimals = 2) => value.toFixed(decimals);

  const labelColor = "#00ff00";
  const valueColor = "#ff0000";
  const indicatorColor = "#ff00ff";
  const dateColor = "#00ffff";

  return (
    <div
      className="select-none"
      style={{
        position: "relative",
        width: "320px",
        height: "200px",
        backgroundColor: "#1a1a1a",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      {/* Row 0: ИЗВЛИЧАНЕ: 0.00 % */}
      <span
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          color: labelColor,
        }}
      >
        ИЗВЛИЧАНЕ:
      </span>
      <span
        style={{
          position: "absolute",
          top: "8px",
          left: "130px",
          color: valueColor,
        }}
      >
        {formatPercent(data.extraction)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "8px",
          left: "180px",
          color: labelColor,
        }}
      >
        %
      </span>

      {/* Row 1: 1p 0 | 4p 0.000 P 0.00 */}
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "8px",
          color: labelColor,
        }}
      >
        1p
      </span>
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "48px",
          color: valueColor,
        }}
      >
        {formatValue(data.p1)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "100px",
          color: labelColor,
        }}
      >
        4p
      </span>
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.p4)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "200px",
          color: indicatorColor,
        }}
      >
        P
      </span>
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "220px",
          color: valueColor,
        }}
      >
        {formatValue(data.pP, 2)}
      </span>

      {/* Row 2: 2p 0.000 | 5p 0.000 K 0.00 */}
      <span
        style={{
          position: "absolute",
          top: "52px",
          left: "8px",
          color: labelColor,
        }}
      >
        2p
      </span>
      <span
        style={{
          position: "absolute",
          top: "52px",
          left: "35px",
          color: valueColor,
        }}
      >
        {formatValue(data.p2)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "52px",
          left: "100px",
          color: labelColor,
        }}
      >
        5p
      </span>
      <span
        style={{
          position: "absolute",
          top: "52px",
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.p5)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "52px",
          left: "200px",
          color: indicatorColor,
        }}
      >
        K
      </span>
      <span
        style={{
          position: "absolute",
          top: "52px",
          left: "220px",
          color: valueColor,
        }}
      >
        {formatValue(data.pK, 2)}
      </span>

      {/* Row 3: 3p 0 | CD 0 | 0 */}
      <span
        style={{
          position: "absolute",
          top: "74px",
          left: "8px",
          color: labelColor,
        }}
      >
        3p
      </span>
      <span
        style={{
          position: "absolute",
          top: "74px",
          left: "48px",
          color: valueColor,
        }}
      >
        {formatValue(data.p3)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "74px",
          left: "100px",
          color: labelColor,
        }}
      >
        CD
      </span>
      <span
        style={{
          position: "absolute",
          top: "74px",
          left: "130px",
          color: valueColor,
        }}
      >
        {formatValue(data.cd)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "74px",
          left: "220px",
          color: valueColor,
        }}
      >
        {formatValue(data.cdVal)}
      </span>

      {/* Row 4: Op 0 | 0o 0 */}
      <span
        style={{
          position: "absolute",
          top: "96px",
          left: "8px",
          color: labelColor,
        }}
      >
        Op
      </span>
      <span
        style={{
          position: "absolute",
          top: "96px",
          left: "48px",
          color: valueColor,
        }}
      >
        {formatValue(data.op)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "96px",
          left: "100px",
          color: labelColor,
        }}
      >
        0o
      </span>
      <span
        style={{
          position: "absolute",
          top: "96px",
          left: "145px",
          color: valueColor,
        }}
      >
        {formatValue(data.oo)}
      </span>

      {/* Row 5: O1k 0.00 | O2k 0.00 */}
      <span
        style={{
          position: "absolute",
          top: "118px",
          left: "8px",
          color: labelColor,
        }}
      >
        O1k
      </span>
      <span
        style={{
          position: "absolute",
          top: "118px",
          left: "48px",
          color: valueColor,
        }}
      >
        {formatValue(data.o1k, 2)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "118px",
          left: "100px",
          color: labelColor,
        }}
      >
        O2k
      </span>
      <span
        style={{
          position: "absolute",
          top: "118px",
          left: "145px",
          color: valueColor,
        }}
      >
        {formatValue(data.o2k, 2)}
      </span>

      {/* Row 6: O1o 0 | O2o 0 */}
      <span
        style={{
          position: "absolute",
          top: "140px",
          left: "8px",
          color: labelColor,
        }}
      >
        O1o
      </span>
      <span
        style={{
          position: "absolute",
          top: "140px",
          left: "48px",
          color: valueColor,
        }}
      >
        {formatValue(data.o1o)}
      </span>
      <span
        style={{
          position: "absolute",
          top: "140px",
          left: "100px",
          color: labelColor,
        }}
      >
        O2o
      </span>
      <span
        style={{
          position: "absolute",
          top: "140px",
          left: "145px",
          color: valueColor,
        }}
      >
        {formatValue(data.o2o)}
      </span>

      {/* Bottom row: Date and Time with border */}
      <div
        style={{
          position: "absolute",
          top: "165px",
          left: "8px",
          right: "8px",
          borderTop: "2px solid #444",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "172px",
          left: "8px",
          color: dateColor,
        }}
      >
        {data.date}
      </span>
      <span
        style={{
          position: "absolute",
          top: "172px",
          left: "220px",
          color: labelColor,
        }}
      >
        {data.time} h
      </span>
    </div>
  );
}
