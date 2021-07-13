import { MenuEdit, MenuDelete, AddNewDeviceIcon } from "./assets/svgs";

export const ScreenTimeStates = [
  {
    label: "All",
    value: "all",
    sub: "Activities during class-time, study-time and play time are shown.",
  },
  {
    label: "Study",
    value: "study",
    sub: "Only the activities during the times you scheduled as class-time are shown.",
  },
  {
    label: "Class",
    value: "class",
    sub: "Only the activities during the times you scheduled as study-time or when manually switched to study-mode from the mode page are shown.",
  },
  {
    label: "Free",
    value: "free",
    sub: "Only the activities during the times you scheduled as free-time or when manually switched to free-mode from the mode page are shown.are shown.",
  },
];

export const NavMenuItems = [
  {
    label: "Add Device",
    icon: AddNewDeviceIcon({
      size: { width: 14, height: 16 },
      color: "#022742",
    }),
  },
  { label: "Edit Details", icon: MenuEdit() },
  { label: "Delete Child", icon: MenuDelete() },
];

export const colors = (color: string) =>
  color === "class"
    ? "#2D82FE"
    : color === "study"
    ? "#FF9E57"
    : color === "free"
    ? "#2fed51"
    : color === "total"
    ? "#8D8D8D"
    : "";

export const DefaultMainState = {
  screenTimeData: [
    {
      id: "",
      label: "",
      value: 0,
      color: "",
    },
  ],
  deviceTimeData: {
    mobileTime: 0,
    laptopTime: 0,
  },
  freeTimeData: {
    totalFreeTime: 0,
    freeTimeUsed: 0,
  },
};
