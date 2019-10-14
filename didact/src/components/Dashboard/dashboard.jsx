import React, { useEffect } from "react";
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Course from "./courses/Course";

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
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 0,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
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
    },
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
  iconImage: {
    width: "40px",
    height: "40px",
    backgroundColor: "gray",
    borderRadius: "50%",
  },
  iconToolBar: {
    margin: "0 5px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
    backgroundColor: "lightgray",
    width: "200px",
    height: "150px",
    borderRadius: 15,
    margin: "10px 0",
  },
  list: {
    width: 230,
  },
  spacing: {
    marginTop: "60px",
  },
}));

function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(courseEndPoint());
  }, [dispatch]);

  const classes = useStyles();
  const theme = useTheme();
  const desktopSize = useMediaQuery("(min-width:600px)");
  const phoneSize = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(false);
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

  const handleDrawerToggle = () => {
    toggleDrawer();
    setOpen(!open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {phoneSize ? <div className={classes.spacing}></div> : null}
      
      <List>
        <ListItem button key="Dashboard">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {phoneSize ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          )}
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
            {!phoneSize ? <Button color="inherit">User Name</Button> : null}
            <div className={classes.iconImage}></div>
          </div>
        </Toolbar>
      </AppBar>
      {/* Panel changes with mobile vs desktop */}
      {phoneSize ? (
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
          {sideList("left")}
        </Drawer>
      ) : (
        // DESKTOP PANEL BELOW
        <Drawer open={left} onClose={toggleDrawer("left", false)}>
          <div className={classes.placeholderDiv}>
            <div className={classes.placeHolder} />
            <div className={classes.placeHolder2} />
          </div>
          {sideList("left")}
        </Drawer>
      )}

      {/* Panel change end */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {phoneSize ? (
          <div className={classes.placeholderDiv}>
            <div className={classes.placeHolder} />
            <div className={classes.placeHolder2} />
          </div>
        ) : null}
        <div>
          {state.coursesReducer.courses
            ? state.coursesReducer.courses.map(course => (
                <Course key={course.id} course={course} />
              ))
            : null}
        </div>
        <Typography paragraph>(input info)</Typography>
      </main>
    </div>
    // <>
    //  {state.coursesReducer.courses ? state.coursesReducer.courses.map(course => <Course key={course.id} course={course} />) : null}
    // </>
  );
}

export default Dashboard;
