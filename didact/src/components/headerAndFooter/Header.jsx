import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from '../Dashboard/dashboard';
import Course from "../Dashboard/courses/Course";
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
  appBar: {
    // zIndex: theme.zIndex.drawer - 1,
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: 'gray',
    color: 'lightgray',
    position: 'fixed'
  },
  appBarDesktop: {
    width: `calc(100% - 100px)`,
    margin: "10px",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: 'gray',
    color: 'lightgray'
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
  contentDesktop: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  drawer: {
    width: 0,
    flexShrink: 0,
    whiteSpace: "nowrap",
    
  },
  drawerOpen: {
    width: drawerWidth,
    height: "800px",
    margin: "10px",
    borderRadius: 15,
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
      width: theme.spacing(9) + 1,
      margin: "10px 10px 10px 10px",
      height: "800px",
      borderRadius: 15
    },
  },
  // hoverTab: {
  //   "&:hover": {
  //     color: 'lightgray',
  //   },
  // },
  iconImage: {
    width: "40px",
    height: "40px",
    backgroundColor: "#ebe8e1",
    borderRadius: "50%",
  },
  iconToolBar: {
    margin: "0 5px",
  },
  list: {
    width: 230,
    marginTop: "50px",
    // position: 'sticky',
    // zIndex: -1,
   
  },
  listClosed: {
    width: "90px",
    marginTop: "50px",
  },
  menuButton: {
    marginRight: 36,
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
  placeHolderClosed: {
    backgroundColor: "gray",
    width: "80%",
    margin: "10px 10px 10px 10px",
    height: "100px",
    borderRadius: 25,
  },
  placeHolderClosed2: {
    backgroundColor: "#ebe8e1",
    width: "80%",
    margin: "10px",
    height: "120px",
    borderRadius: 25,
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
  const desktopSize = useMediaQuery("(min-width:600px)");
  const phoneSize = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(true);
  const [left, setLeft] = React.useState(false);

  const toggleDrawer = () => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setLeft(!left);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  const sideList = side => (
    <div
      className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <List>
        <ListItem
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
          <ListItemText primary="Dashboard"/>
        </ListItem>
      </List>

      <List>
        <ListItem button key="Activity">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Activity" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Courses">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Learning Paths">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Learning Paths" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Profile">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );

  const sideListClosed = () => (
    <div
    className={classes.listClosed}
  >

    <List>
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
      </ListItem>
    </List>

    <List>
      <ListItem button key="Activity">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      </ListItem>
    </List>
    <List>
      <ListItem button key="Courses">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      </ListItem>
    </List>
    <List>
      <ListItem button key="Learning Paths">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      </ListItem>
    </List>
    <List>
      <ListItem button key="Profile">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  </div>
);

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
              <div className={classes.placeHolderClosed} />
              <div className={classes.placeHolderClosed2} />
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
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          <Typography variant="h6" className={classes.title}>
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
         <Drawer  open={left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}
        </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        {/*************************ADD COMPONENTS HERE *********************** */}
        {routedContent()}
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
