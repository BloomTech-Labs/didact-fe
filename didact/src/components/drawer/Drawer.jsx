import React from "react";
import { makeStyles } from '@material-ui/core/styles'

import clsx from "clsx";
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import SideList from './SideList'

const DrawerComponent = (props) => {

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
            color: "white",
            },
          },
          arrow: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignContent: 'center',
            color: "white",
              
          },
          drawer: {
            width: 0,
            flexShrink: 0,
            whiteSpace: "nowrap",
          },
          
          drawerOpen: {
            // backgroundColor: '#eeeff3',
            width: "240px",
            height: "600px",
            margin: "10px",
            marginLeft: 0,
            marginRight: 0,
            // marginTop: "195px",
            borderRadius: "15px",
            overflowY:"hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          drawerClose: {
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            // backgroundColor: '#eeeff3',
            overflowX: "hidden",
            overflowY:"hidden",
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up("sm")]: {
              width: theme.spacing(8) + 1, 
              padding: 0,
              marginTop: '10px',
              // marginTop: "195px",
              height: "600px",
              borderRadius: "15px",
            },
          },
          // drawerOpenMobile: {
          //   backgroundColor: '#eeeff3',
          //   position: 'fixed',
          //   width: "240px",
          //   height: "500px",
          //   margin: "37px 0 10px 5px",
          //   borderRadius: "15px",
          //   transition: theme.transitions.create("width", {
          //     easing: theme.transitions.easing.sharp,
          //     duration: theme.transitions.duration.enteringScreen,
          //   }),
          // },
          // drawerCloseMobile: {
          //   transition: theme.transitions.create("width", {
          //     easing: theme.transitions.easing.sharp,
          //     duration: theme.transitions.duration.leavingScreen,
          //   }),
          //   backgroundColor: '#eeeff3',
          //   overflow: "hidden",
          //   height: "500px",
          //   margin: "73px 10px 10px 10px",
          //   borderRadius: "15px",
          //   position: 'fixed',
          //   zIndex: 1,
          //   width: theme.spacing(7) + 1,
          //   [theme.breakpoints.up("sm")]: {
          //     width: theme.spacing(7) + 1,
          //   },
          // },
        menuButtonMobile: {
            marginRight: '-4px'
        },
        menuButtonDesktop: {
            marginLeft: theme.spacing(1),
          },
        placeholderDiv: {
            display: "flex",
            justifyContent: "center",
            alignContent: "space-evenly",
            margin: "10px 0 0 0",
            flexFlow: "column wrap",
            position: 'fixed',
        },
        placeholderDivShadowed: {
            display: "flex",
            justifyContent: "center",
            alignContent: "space-evenly",
            margin: "20px 0",
            flexFlow: "column wrap",
           
        },
        placeHolder: {
            backgroundColor: "gray",
            width: "240px",
            height: "80px",
            borderRadius: 15,
            margin: "0 0 10px 0",
            // position: 'fixed'
        }, 
        placeHolder2: {
            backgroundColor: "#ebe8e1",
            width: "240px",
            height: "80px",
            borderRadius: 15,
            margin: "0 0 0 0",
            // position: 'fixed'
        },
        placeHolderClosed: {
            backgroundColor: "gray",
            width: "65px",
            height: "80px",
            borderRadius: 15,
            marginLeft: "20px",
            marginTop: "0",
            // position: 'fixed'
          },
          placeHolder2Closed: {
            backgroundColor: "#ebe8e1",
            width: "65px",
            height: "80px",
            borderRadius: 15,
            marginLeft: "20px",
            margin: "10px 0 0 0",
            // position: 'fixed'
          },
    
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        }
    }));

    const classes = drawerStyles();
   
    const open = props.open

    return (
        <>
         {/* {open ? (
                <div className={classes.placeholderDiv}>
                    <div className={classes.placeHolder} />
                    <div className={classes.placeHolder2} />
                </div>
            ) : (
                    <div className={classes.placeholderDiv}>
                        <div className={classes.placeHolderClosed} />
                        <div className={classes.placeHolder2Closed} />
                    </div>
                )} */}
        <Drawer
            anchor={"none"}
            variant="permanent"
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
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={classes.menuButtonDesktop}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            {<SideList open = {open} props = {props}/>}
        </Drawer>
        </>
    );
};

export default DrawerComponent;