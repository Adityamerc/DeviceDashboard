import React, { useContext, useState } from "react";
import { withStyles, Button, IconButton, makeStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { AvatarDefault, AddNewDeviceIcon } from "../assets/svgs";
import styles from "./Navbar.module.scss";
import { IsMobileContext } from "../contexts";
import { NavMenuItems } from "../constants";

const AddDevice = withStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    border: "2px solid #054DB9",
    padding: "0.325rem 1.25rem",
    whiteSpace: "nowrap",
    height: "2.5625rem",
    "&:hover": {
      transition: "none",
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down(790)]: {
      padding: "0.325rem 1rem",
      height: "2.0625rem",
    },
  },
  label: {
    textTransform: "none",
    fontFamily: "Open Sans",
    color: "#054DB9",
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
}))(Button);

const useStyles = makeStyles({
  root: { fontFamily: "Open Sans" },
});

const Navbar: React.FC = () => {
  const isMobile = useContext<boolean>(IsMobileContext);
  const classes = useStyles();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleOpen = (value: HTMLElement | null) => setMenuAnchor(value);

  return (
    <nav className={styles.navMain}>
      <div className={styles.userInfo}>
        <AvatarDefault
          size={isMobile ? 30 : 49}
          circleFill="#000"
          personFill="#F2F2F2"
        />
        <p className={styles.userName}>User</p>
      </div>
      <div className={styles.deviceInfo}>
        <AddDevice centerRipple>
          <AddNewDeviceIcon size={{ height: 22, width: 20 }} color="#054DB9" />
          &nbsp; Add device
        </AddDevice>
        <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
          <MoreHorizIcon style={{ color: "#000" }} />
        </IconButton>
      </div>
      <Menu
        anchorEl={menuAnchor}
        keepMounted
        open={!!menuAnchor}
        onClose={handleOpen.bind(this, null)}
        PaperProps={{
          style: {
            maxHeight: 50 * 4.5,
            width: "20ch",
          },
        }}
      >
        {NavMenuItems.map((it) => (
          <>
            {!isMobile ? (
              it.label !== "Add Device" && (
                <MenuItem key={it.label} classes={{ root: classes.root }}>
                  {it.icon}
                  &nbsp; &nbsp;
                  {it.label}
                </MenuItem>
              )
            ) : (
              <MenuItem key={it.label} classes={{ root: classes.root }}>
                {it.icon}
                &nbsp; &nbsp;
                {it.label}
              </MenuItem>
            )}
          </>
        ))}
      </Menu>
    </nav>
  );
};

export default Navbar;
