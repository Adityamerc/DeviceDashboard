import React from "react";
import styles from "./FreeTimeUsage.module.scss";
import { withStyles, LinearProgress, Button } from "@material-ui/core";
import { MinutesToHours } from "../utils/MinutesToHours";

interface Props {
  data: { freeTimeUsed: number; totalFreeTime: number };
}

const CustomLinearProgress = withStyles({
  root: {
    height: "1.375rem",
    borderRadius: "0.75rem",
    backgroundColor: "#E4EFFF",
  },
  bar1Determinate: {
    backgroundColor: "#2FED51",
  },
})(LinearProgress);

const ExtendButton = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    border: "2px solid #2F80ED",
    color: "#2F80ED",
    padding: "0.59375rem 1.25rem",
    fontFamily: "Open Sans",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "0.9375",
  },
})(Button);

const FreeTimeUsage: React.FC<Props> = ({
  data: { freeTimeUsed, totalFreeTime },
}) => {
  return (
    <div className={styles.Container}>
      <h4 className="header">Free Time Usage</h4>
      <div className={styles.usageTimeContainer}>
        <div className={styles.usedTime}>
          Used
          <span>{MinutesToHours(freeTimeUsed)}</span>
        </div>
        <div className={styles.maxTime}>
          Max
          <span>{MinutesToHours(totalFreeTime)}</span>
        </div>
      </div>
      <CustomLinearProgress value={freeTimeUsed} variant="determinate" />
      <div className={styles.extendContainer}>
        <ExtendButton>Extend Free-time</ExtendButton>
      </div>
      <p className={styles.changeRestrictions}>Change time restrictions</p>
    </div>
  );
};

export default FreeTimeUsage;
