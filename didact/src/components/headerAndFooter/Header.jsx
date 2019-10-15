import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from '../Dashboard/dashboard';
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "lightgray"
  },
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
  appBarMobile: {
    width: `calc(100%)`,
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: 'gray',
    color: 'lightgray',
    position: 'fixed',
    

  },
  appBarDesktop: {
    width: `calc(100% - 100px)`,
    margin: "10px",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: 'gray',
    color: 'lightgray',
    position: 'fixed'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - (${drawerWidth}px + 30px))`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  arrow: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    color: "white",
      
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  contentMobile: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: "80px",
  },
  contentShadow: {
    background: "rgba(0, 0, 0, 0.8)",
    filter: "brightness(50%)",
    zIndex:100,
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: "80px",
  },
  drawer: {
    width: 0,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  
  drawerOpen: {
    width: drawerWidth,
    height: "800px",
    margin: "10px",
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
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1, 
      margin: "10px 10px 10px 10px",
      height: "800px",
      borderRadius: "15px"
    },
  },
  drawerOpenMobile: {
    position: 'absolute',
    width: drawerWidth,
    height: "500px",
    margin: "37px 0 10px 5px",
    borderRadius: "15px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerCloseMobile: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
    height: "500px",
    margin: "73px 10px 10px 10px",
    borderRadius: "15px",
    position: 'fixed',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
      // margin: "10px 10px 10px 10px",
      // borderRadius: '50%',
    },
  },
  
  iconImage: {
    width: "40px",
    height: "40px",
    backgroundColor: "#ebe8e1",
    borderRadius: "50%",
  },
  iconToolBar: {
    margin: "0 5px",
  },
  menuButtonMobile: {
    marginRight: '-4px'
  },
  menuButtonDesktop: {
    marginRight: theme.spacing(.5),
  },
  placeholderDiv: {
    display: "flex",
    justifyContent: "center",
    alignContent: "space-evenly",
    margin: "20px 0",
    flexFlow: "column wrap",
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
    width: "200px",
    height: "100px",
    borderRadius: 15,
    margin: "10px 0",
  },
  placeHolder2: {
    backgroundColor: "#ebe8e1",
    width: "200px",
    height: "120px",
    borderRadius: 15,
    margin: "10px 0",
  },
  spacing: {
    marginTop: "60px",
  },
  titleDesktop: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  toolbarIcons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  // const tabletSize = useMediaQuery("(max-width:770px");
  const phoneSize = useMediaQuery("(max-width:770px)");
  const [open, setOpen] = React.useState(true);
  const [openMobile, setOpenMobile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  
  const handleDrawerOpenMobile = () => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenMobile(!openMobile);
  };


  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  const sideList = side => (
    <>
     <List className={classes.hoverTab}>
          <ListItem
            className={classes.hoverTab}
            button
            component={NavLink}
            to="/dashboard"
            style={{ textDecoration: "none" }}
            activeClassName={classes.activeTab}
            key="Dashboard"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            <ListItemText className = {classes.arrow} primary=">" />
          </ListItem>
        </List>
  
        <List className={classes.hoverTab}>
          <ListItem button key="Activity">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Activity" />
            <ListItemText className = {classes.arrow} primary=">" />
          </ListItem>
        </List>
        <List className={classes.hoverTab}>
          <ListItem button key="Courses">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
            <ListItemText className = {classes.arrow} primary=">" />
          </ListItem>
        </List>
        <List className={classes.hoverTab}>
          <ListItem button key="Learning Paths">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Learning Paths" />
            <ListItemText className = {classes.arrow} primary=">" />
          </ListItem>
        </List>
        <List className={classes.hoverTab}>
          <ListItem button key="Profile">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
            <ListItemText className = {classes.arrow} primary=">" />
          </ListItem>
        </List>
    </>
  );

//** */ Can Add Components Below **********************
  const routedContent = () => {
    return (
    <div>
        {phoneSize ? (
          open ? (
            <div className={classes.placeholderDiv}>
              <div className={classes.placeHolder} />
              <div className={classes.placeHolder2} />
            </div>
          ) : (
            <div className={classes.placeholderDiv}>
              <div className={classes.placeHolder} />
              <div className={classes.placeHolder2} />
            </div>
          )
        ) : null}
         <Dashboard />
    </div>
    )
  };


  return (
    // MOBILE CODE ****************************************************************************
    <>
    {phoneSize ? (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // position="absolute"
        className={clsx(classes.appBarMobile, {
          // [classes.appBarShift]: openMobile,
        })}
      >
        <Toolbar>
          <Typography variant="h5">
            Didact
          </Typography>
          <div className={classes.toolbarIcons}>
              <Button className={classes.iconToolBar} color="inherit">
                 first
              </Button>
               <Button className={classes.iconToolBar} color="inherit">
               second
              </Button>
              <Button className={classes.iconToolBar} color="inherit">
                 third
              </Button>
              <div className={classes.iconImage}></div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpenMobile]: openMobile,
          [classes.drawerCloseMobile]: !openMobile,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpenMobile]: openMobile,
            [classes.drawerCloseMobile]: !openMobile,
          }),
        }}
        open={openMobile}
      >
        <div className={classes.toolbar}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenMobile()}
            edge="start"
            className={classes.menuButtonMobile}
          >
            <MenuIcon />
          </IconButton>
        </div>
        {sideList()}
      </Drawer>
      <main className={openMobile ? classes.contentShadow :classes.contentMobile}>
        <div className={classes.toolbar} />
        {routedContent()}
        {/*************************ADD COMPONENTS HERE *********************** */}
      </main>
    </div>
        ) 
        // END OF MOBILE CODE *******************************************************************
        : 
        // BEGINNING OF DESKTOP CODE ************************************************************
        (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar
      // position="absolute"
      className={clsx(classes.appBarDesktop, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <Typography variant="h5">
          Didact
        </Typography>
        <div className={classes.toolbarIcons}>
            <Button className={classes.iconToolBar} color="inherit">
               first
            </Button>
             <Button className={classes.iconToolBar} color="inherit">
             second
            </Button>
            <Button className={classes.iconToolBar} color="inherit">
               third
            </Button>
            <Button color="inherit">User Name</Button>
            <div className={classes.iconImage}></div>
        </div>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
      <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={classes.menuButtonDesktop}
        >
          <MenuIcon />
        </IconButton>
      </div>
      {open ? (<div className={classes.placeholderDiv}>
            <div className={classes.placeHolder} />
            <div className={classes.placeHolder2} />
          </div>) : (
      <div className={classes.placeholderDiv}>
            <div className={classes.placeHolderClosed} />
            <div className={classes.placeHolderClosed2} />
          </div>
          )}
     {sideList()}
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {routedContent()}
      {/*************************ADD COMPONENTS HERE *********************** */}
    </main>
  </div>
     )}  
     </>
    );
}

export default Header;
