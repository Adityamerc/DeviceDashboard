interface ScreenTimeState {
  screenTimeOf: string;
}
type Action = { type: string; payload: string };

const initialState = {
  screenTimeOf: "all",
};

export const Reducer = (
  state: ScreenTimeState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "DELTA_SCREEN_TIME_TYPE":
      return { screenTimeOf: action.payload };

    default:
      return state;
  }
};
