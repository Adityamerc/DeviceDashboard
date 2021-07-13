import React, { useEffect, useState, useCallback, useContext } from "react";
import Menu from "@material-ui/core/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useGetUsage } from "../api/useGetUsage";
import AllScreenTime from "./AllScreenTime";
import FreeTimeUsage from "./FreeTimeUsage";
import DeviceData from "./DeviceData";
import { useSelector, connect, useDispatch } from "react-redux";
import styles from "./Main.module.scss";
import "./Main.scss";
import { colors } from "../constants";
import { CapitalizeFirstLetter } from "../utils/CapitalizeFirstLetter";
import { DefaultMainState } from "./../constants";
import { FilterMenu } from "./FilterMenu";
import { IsMobileContext } from "./../contexts";
import FilterDialog from "./FilterDialog";
import { handleScreenTimeChange } from "./../redux/actions";

interface AllData {
  screenTimeData: {
    id: string;
    label: string;
    value: number;
    color: string;
  }[];
  deviceTimeData: {
    mobileTime: number;
    laptopTime: number;
  };
  freeTimeData: {
    totalFreeTime: number;
    freeTimeUsed: number;
  };
}

interface Props {
  query: string;
}

interface ReduxState {
  screenTimeOf: string;
}

const Main: React.FC<Props> = ({ query }) => {
  const usageDetails = useGetUsage();
  const [allData, setAllData] = useState<AllData>(DefaultMainState);
  const filterChecked: string = useSelector(
    (state: ReduxState) => state.screenTimeOf
  );
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMobile = useContext<boolean>(IsMobileContext);

  // function to format the api data into the format needed by pie chart
  const getRightChartData = useCallback(
    (of: string) => ({
      id: of,
      label: CapitalizeFirstLetter(of === "free" ? "free-time" : of),
      value: +(usageDetails?.[0]?.chartData?.[`${of}Time`]?.total || 0),
      color: colors(of),
    }),
    [usageDetails]
  );

  //function to format the api data into the format needed by free time component
  const getRightDeviceData = useCallback(
    (of: string) => ({
      mobileTime: +(usageDetails?.[0]?.deviceUsage?.[`${of}Time`]?.mobile || 0),
      laptopTime: +(usageDetails?.[0]?.deviceUsage?.[`${of}Time`]?.laptop || 0),
    }),
    [usageDetails]
  );

  const handleSelectChange = useCallback(
    (value: string) => {
      dispatch(handleScreenTimeChange(value));

      if (value === "all") {
        setAllData({
          freeTimeData: {
            totalFreeTime: +(usageDetails?.[0]?.freeTimeMaxUsage || 0),
            freeTimeUsed: +(usageDetails?.[0]?.chartData?.freeTime?.total || 0),
          },
          screenTimeData: [
            getRightChartData("class"),
            getRightChartData("study"),
            getRightChartData("free"),
          ],
          deviceTimeData: getRightDeviceData("total"),
        });
      } else {
        setAllData({
          freeTimeData: {
            totalFreeTime: +(usageDetails?.[0]?.freeTimeMaxUsage || 0),
            freeTimeUsed: +(usageDetails?.[0]?.chartData?.freeTime?.total || 0),
          },
          screenTimeData: [
            getRightChartData(value),
            getRightChartData("total"),
          ],
          deviceTimeData: getRightDeviceData(value),
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getRightChartData, getRightDeviceData]
  );

  const filter: string = query
    .slice(query.indexOf("=") + 1)
    .replace("time", "");

  useEffect(() => {
    handleSelectChange(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usageDetails]);

  const handleFilterChange = (e: string) => {
    handleSelectChange(e);
    setAnchorEl(null);
  };

  return (
    <main className={styles.mainContainer}>
      <h4 className={styles.mainHeader}>Activities Summary</h4>
      <div className={styles.activitiesDropDown}>
        <div
          onClick={(e) => setAnchorEl(e.currentTarget)}
          className={`${styles.selectFilter} ${
            filterChecked !== "all" && styles.selectFilterFill
          }`}
        >
          {filterChecked !== "all"
            ? `${CapitalizeFirstLetter(filterChecked)}-time only`
            : CapitalizeFirstLetter(filterChecked)}
          <ArrowDropDownIcon />
        </div>

        {!isMobile && (
          <Menu
            keepMounted
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
          >
            <FilterMenu
              handleChange={handleFilterChange}
              filterChecked={filterChecked}
            />
          </Menu>
        )}
      </div>
      <div className={styles.dashboardContainer}>
        <AllScreenTime data={allData.screenTimeData} />
        <FreeTimeUsage data={allData.freeTimeData} />
        <DeviceData data={allData.deviceTimeData} />
      </div>
      {isMobile && (
        <FilterDialog open={!!anchorEl} close={() => setAnchorEl(null)}>
          <FilterMenu
            handleChange={handleFilterChange}
            filterChecked={filterChecked}
          />
        </FilterDialog>
      )}
    </main>
  );
};

export default connect(null, null)(Main);
