import { DELTA_SCREEN_TIME_TYPE } from "./actionTypes";

export const handleScreenTimeChange = (newType: string) => {
  return {
    type: DELTA_SCREEN_TIME_TYPE,
    payload: newType,
  };
};
