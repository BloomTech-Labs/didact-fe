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
            width: "255px",
            height: "600px",
            margin: " 103px 0 10px 10px",
            borderRadius: "15px",
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
            overflowX: "hidden",
            overflowY:"hidden",
            marginLeft: "10px",
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up("sm")]: {
              width: theme.spacing(8) + 1, 
              padding: 0,
              marginTop: '103px',
              height: "600px",
              borderRadius: "15px",
            },
          },
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
        },
        didactDivOpen: {
          width: '255px',
          backgroundColor: "#565554",
          marginLeft: '20px',
          height: '68px',
          marginTop: "11px",
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: "18px",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        didactDivClosed: {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: '65px',
          backgroundColor: "#565554",
          overflow: 'hidden',
          marginLeft: '20px',
          height: '68px',
          marginTop: "10px",
          position: 'fixed',
          display: 'flex',
          paddingLeft: '70px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: "19px",
          cursor: 'pointer'
        },
    }));

    const classes = drawerStyles();
   
    const open = props.open

     const handleBack = () => {
        props.props.history.push('/')
    }  

    return (
        <>
         {open ? 
          (<div className={classes.didactDivOpen} onClick = {handleBack}>
            <h2  style={{fontSize: "3.2rem", color: 'white', fontFamily: 'ITC Grouch'}}>Didact</h2>
          </div>)
          :
          (
          <div className={classes.didactDivClosed} onClick = {handleBack}>
            <h2 style={{fontSize: "3.2rem", color: 'white', fontFamily: 'ITC Grouch'}}>D<span  style={{color: "#565554"}}>idact</span></h2>
          </div>
          )}
        <Drawer
            anchor = "none"
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
                    <MenuIcon style={{fontSize: '28px'}}/>
                </IconButton>
            </div>
            {<SideList open = {open} props = {props}/>}
        </Drawer>
        </>
    );
};

export default DrawerComponent;