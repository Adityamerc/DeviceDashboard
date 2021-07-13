import React from "react";
import { ResponsivePie } from "@nivo/pie";
import styles from "./AllScreenTime.module.scss";
import { MinutesToHours } from "../utils/MinutesToHours";

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "1.25rem",
      }}
    >
      <tspan x={centerX} y={centerY - 10} style={{ fontWeight: 600 }}>
        Total
      </tspan>
      <tspan x={centerX} y={centerY + 12} style={{ fontWeight: 400 }}>
        {MinutesToHours(+total)}
      </tspan>
    </text>
  );
};

const theme = {
  fontSize: 14,
  fontWeight: 400,
};

const AllScreenTime = ({ data }) => {
  return (
    <div className={styles.Container}>
      <h4 className="header">All Screen Time</h4>
      <div className={styles.pieContainer}>
        {/* I have used @nivo pie chart since it has better center text alignment and better documentation and animation  */}
        <ResponsivePie
          data={data}
          margin={{ top: 0, right: 0, bottom: 90, left: 0 }}
          innerRadius={0.9}
          padAngle={0}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color" }}
          colors={{ datum: "data.color" }}
          layers={["arcs", "legends", CenteredMetric]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 90,
              itemHeight: 18,
              itemTextColor: "#000",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
            },
          ]}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default AllScreenTime;
