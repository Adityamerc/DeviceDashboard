import React from "react";
import { DevicePhone, DeviceLap } from "../assets/svgs";
import { MinutesToHours } from "../utils/MinutesToHours";
import styles from "./DeviceData.module.scss";

interface Props {
  data: {
    mobileTime: number;
    laptopTime: number;
  };
}

const DeviceData: React.FC<Props> = ({ data: { mobileTime, laptopTime } }) => {
  return (
    <div className={styles.deviceDataContainer}>
      <div className={styles.CenterWrap}>
        <h4 className="header">By Devices</h4>
        <div className={styles.devices}>
          <div className={styles.usersPhone}>
            <DevicePhone size={{ height: 85, width: 45 }} color="#414042" />
            <div className={styles.deviceInfo}>
              User's Phone
              <span>{MinutesToHours(mobileTime)}</span>
            </div>
          </div>
          <div className={styles.usersLap}>
            <DeviceLap size={{ height: 87, width: 140 }} color="#414042" />
            <div className={styles.deviceInfo}>
              User's Laptop
              <span>{MinutesToHours(laptopTime)}</span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.seeAll}>See all devices</p>
    </div>
  );
};

export default DeviceData;
