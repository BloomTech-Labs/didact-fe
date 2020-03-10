import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SideList from "./SideList";

const DrawerComponent = props => {
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
      whiteSpace: "nowrap",
      // marginBottom: "70%",
      height: "100%"
    },

    drawerOpen: {
      width: "255px",
      height: "100%",
      margin: " 80px 0 10px 10px",
      borderRadius: "15px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      overflowY: "hidden",
      marginLeft: "10px",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8) + 1,
        padding: 0,
        marginTop: "80px",
        height: "600px",
        borderRadius: "15px"
      }
    },
    menuButtonMobile: {
      marginRight: "-4px"
    },
    menuButtonDesktop: {
      marginLeft: theme.spacing(1)
    },
    placeholderDiv: {
      display: "flex",
      justifyContent: "center",
      alignContent: "space-evenly",
      margin: "10px 0 0 0",
      flexFlow: "column wrap",
      position: "fixed"
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
      width: "240px",
      height: "80px",
      borderRadius: 15,
      margin: "0 0 10px 0"
      // position: 'fixed'
    },
    placeHolder2: {
      backgroundColor: "#ebe8e1",
      width: "240px",
      height: "80px",
      borderRadius: 15,
      margin: "0 0 0 0"
      // position: 'fixed'
    },
    placeHolderClosed: {
      backgroundColor: "gray",
      width: "65px",
      height: "80px",
      borderRadius: 15,
      marginLeft: "20px",
      marginTop: "0"
      // position: 'fixed'
    },
    placeHolder2Closed: {
      backgroundColor: "#ebe8e1",
      width: "65px",
      height: "80px",
      borderRadius: 15,
      marginLeft: "20px",
      margin: "10px 0 0 0"
      // position: 'fixed'
    },

    toolbar: {
      display: "flex",
      alignItems: "center",

      padding: theme.spacing(0, 1),
      paddingBottom: "10px",

      background: "#eeeeee",
      ...theme.mixins.toolbar
    },
    didactDivOpen: {
      width: "255px",
      backgroundColor: "#eeeeee",

      height: "68px",
      marginTop: "-20px",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "18px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    didactDivClosed: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: "65px",
      backgroundColor: "#eeeeee",
      // overflow: "hidden",
      marginLeft: "0.4%",
      height: "68px",
      marginTop: "-20px",
      position: "fixed",
      display: "flex",
      paddingRight: "40px",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "18px",
      cursor: "pointer"
    }
  }));

  const classes = drawerStyles();

  const open = props.open;

  const handleBack = () => {
    props.props.history.push("/");
  };

  return (
    <>
      <div className={classes.drawerDiver}>
        <Drawer
          variant="permanent"
          anchor="left"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            {open ? (
              <div className={classes.didactDivOpen} onClick={handleBack}>
                <h2
                  style={{
                    fontSize: "3.2rem",
                    color: "black",
                    font: "black 32px",
                    fontFamily: "DINosaur",
                    letterSpacing: "7px",
                    color: "#242424",
                    // fontWeight: "900",
                    fontStyle: "normal"
                  }}
                >
                  DIDACT
                </h2>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={props.handleDrawerOpen}
                  edge="start"
                  className={classes.menuButtonDesktop}
                >
                  <MenuIcon style={{ fontSize: "24px", textAlign: "center" }} />
                </IconButton>
              </div>
            ) : (
              <div className={classes.didactDivClosed} onClick={handleBack}>
                <h2
                  style={{
                    fontSize: "32px",
                    color: "#242424",
                    // fontFamily: "dinosaur",
                    // fontFamily: "sans-serif",
                    fontWeight: "900",
                    fontStyle: "normal"
                  }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={classes.menuButtonDesktop}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "24px",

                        textAlign: "center"
                      }}
                    />
                  </IconButton>
                </h2>
              </div>
            )}
          </div>
          {<SideList open={open} props={props} />}
        </Drawer>
      </div>
    </>
  );
};

export default DrawerComponent;
