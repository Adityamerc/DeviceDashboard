import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { makeStyles } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  MT: {
    marginTop: "30%",
    borderRadius: "15px 15px 0px 0px",
    boxShadow: "0px -7px 15px -3px rgba(0, 0, 0, 0.25)",
  },
});

const FilterDialog: React.FC<Props> = ({ children, open, close }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen
      TransitionComponent={Transition}
      classes={{ paperFullScreen: classes.MT }}
    >
      {children}
    </Dialog>
  );
};

export default FilterDialog;
