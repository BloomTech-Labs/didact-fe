import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SideList from "./SideList";

const MobileDrawerComponent = props => {
  const drawerStyles = makeStyles(theme => ({
    activeTab: {
      backgroundColor: "gray",
      borderRadius: "0 20px 20px 0",
      width: "215px",
      color: "white",
      "&:hover": {
        backgroundColor: "gray",
        borderRadius: "0 20px 20px 0",
        width: "215px",
        color: "white"
      }
    },
    arrow: {
      display: "flex",
      justifyContent: "flex-end",
      alignContent: "center",
      color: "white"
    },
    drawer: {
      width: 0,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },

    drawerOpenMobile: {
      position: "absolute",
      width: "240px",
      height: "580px",
      margin: "37px 10px 10px 5px",
      borderRadius: "15px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerCloseMobile: {
      overflow: "hidden",
      height: "580px",
      margin: "73px 10px 0px 10px",
      borderRadius: "15px",
      position: "fixed",
      zIndex: 1,
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7) + 1
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    menuButtonMobile: {
      marginRight: "-8px"
    },
    menuButtonDesktop: {
      marginLeft: theme.spacing(1)
    },
    placeholderDiv: {
      display: "flex",
      justifyContent: "center",
      alignContent: "space-evenly",
      margin: "10px 0",
      flexFlow: "column wrap"
    },
    placeholderDivShadowed: {
      display: "flex",
      justifyContent: "center",
      alignContent: "space-evenly",
      margin: "20px 0",
      flexFlow: "column wrap"
    },
    placeHolder: {
      backgroundColor: "gray",
      width: "200px",
      height: "100px",
      borderRadius: 15,
      margin: "0 0 10px 0"
    },
    placeHolder2: {
      backgroundColor: "#ebe8e1",
      width: "200px",
      height: "120px",
      borderRadius: 15,
      margin: "0 0 0 0"
    },
    placeHolderClosed: {
      backgroundColor: "gray",
      width: "50px",
      height: "100px",
      borderRadius: 15,
      marginTop: "0"
    },
    placeHolder2Closed: {
      backgroundColor: "#ebe8e1",
      width: "50px",
      height: "120px",
      borderRadius: 15,
      margin: "10px 0 0 0"
    },

    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    }
  }));

  const classes = drawerStyles();

  const openMobile = props.openMobile;

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpenMobile]: openMobile,
        [classes.drawerCloseMobile]: !openMobile
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpenMobile]: openMobile,
          [classes.drawerCloseMobile]: !openMobile
        })
      }}
      open={openMobile}
    >
      <div className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpenMobile}
          edge="start"
          className={classes.menuButtonMobile}
        >
          <MenuIcon style={{ fontSize: "28px" }} />
        </IconButton>
      </div>
      {<SideList props={props} />}
    </Drawer>
  );
};

export default MobileDrawerComponent;
