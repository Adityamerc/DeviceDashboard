import React from "react";
import styles from "./FilterMenu.module.scss";
import { ScreenTimeStates } from "./../constants";
import { withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

type MapProps = {
  label: string;
  value: string;
  sub: string;
};

interface Props {
  handleChange: (str: string) => void;
  filterChecked: string;
}

const FixedList = withStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up(790)]: {
      maxWidth: "36ch",
    },
  },
}))(List);

const CustomRadio = withStyles({
  checked: { color: "#0078D4" },
})(Radio);

const CustomListItemText = withStyles({
  root: {
    "& > *": {
      fontFamily: "Open Sans",
    },
  },
  primary: { fontSize: "0.875rem", color: "#000", fontWeight: 600 },
  secondary: { fontSize: "0.875rem", color: "#000" },
})(ListItemText);

export const FilterMenu: React.FC<Props> = ({
  handleChange,
  filterChecked,
}) => {
  return (
    <FixedList>
      <div className={styles.filterHeader}>
        Activities during which time is shown ?
      </div>
      {ScreenTimeStates.map((it: MapProps, ind) => (
        <>
          <ListItem key={`${it.value}`} alignItems="flex-start">
            <CustomListItemText primary={it.label} secondary={it.sub} />
            <ListItemSecondaryAction>
              <CustomRadio
                checked={filterChecked === it.value}
                onChange={(e) => handleChange(e.target.value)}
                value={it.value}
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>
          {ind !== ScreenTimeStates.length - 1 && (
            <Divider variant="middle" component="li" />
          )}
        </>
      ))}
    </FixedList>
  );
};
