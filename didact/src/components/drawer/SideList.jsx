import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// new feature dropdown for nav
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
////

import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import { SideListWrapper } from "./SideListStyles";

const SideList = ({ props }) => {
  const drawerStyles = makeStyles(theme => ({
    activeTab: {
      backgroundColor: "#ffffff",
      borderRadius: "0 20px 20px 0",
      width: "225px",
      color: "white",
      height: "50px",
      margin: "10px 0px"
    },
    arrow: {
      textAlign: "right",
      marginRight: "10px",
      width: "100%",
      fontSize: "2rem",
      color: "#5b5b5b"
    },
    listing: {
      display: "flex",
      flexDirection: "column",
      margin: "10px 0px",
      padding: 0
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "225px"
    },

    navigationLinks: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "15%",
      paddingTop: "10%"
    },

    iconImageProfile: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    },

    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  }));

  const classes = drawerStyles();

  const userName = useSelector(state => state.onboardingReducer.user);

  const handleLogOut = () => {
    localStorage.clear("token");
    props.props.history.push("/login");
  };

  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const lastName = userName.last_name
    ? userName.last_name.substring(0, 1).toUpperCase() +
      userName.last_name.substring(1)
    : null;

  // state for dropdown links

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <SideListWrapper>
      <ul className={classes.listing}>
        <NavLink
          exact
          to="/"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Dashboard"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              outline: "none !important"
            }}
          >
            <DashboardIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Dashboard</p>
            {props.props.location.pathname === "/" ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <NavLink
          to="/courses"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Add Course"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center"
            }}
          >
            <FolderOpenIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Courses</p>
            {props.props.match.path.includes("/courses") ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>

        <div className={classes.learningPathDiv}>
          {/* <List component="learning-path-nav" className={classes.root}> */}
          <nav onClick={handleClick}>
            <NavLink
              to="/learning-paths"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "black" }}
              activeClassName={classes.activeTab}
              className={classes.listItem}
              key="Learning Paths"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <InboxIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
                <p style={{ marginLeft: "25px", fontWeight: "bold" }}>
                  <ListItemText primary="Learning Paths" />
                </p>

                {props.props.match.path.includes("/learning-paths") ? (
                  <p className={classes.arrow}>
                    <ChevronRightIcon
                      style={{ fontSize: "2.4rem", marginTop: "6px" }}
                    />
                  </p>
                ) : (
                  <p className={classes.arrow}>
                    <ChevronRightIcon
                      style={{
                        fontSize: "2.4rem",
                        marginTop: "6px",
                        color: "#5b5b5b"
                      }}
                    />
                  </p>
                )}
              </div>
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </NavLink>
          </nav>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* </List> */}
            <ListItem button className={classes.nested}>
              <ListItemText primary="Starred" />
            </ListItem>
          </Collapse>
        </div>

        <NavLink
          to="/about"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Resources"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center"
            }}
          >
            <SettingsIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Resources</p>
            {props.props.match.path.includes("/learning-paths") ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <div className={classes.navigationLinks}>
          <Link
            to="/about"
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "sans-serif",
              fontWeight: "semi bold"
            }}
          >
            <p>About</p>
          </Link>
          <Link
            to="/contact"
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "sans-serif",
              fontWeight: "semi bold"
            }}
          >
            <p>Contact</p>
          </Link>
        </div>
      </ul>

      <div className="profileSection">
        {userName.photo ? (
          <img
            src={userName.photo}
            alt="Profile"
            className={classes.iconImageProfile}
          />
        ) : (
          <PermIdentityIcon className={classes.iconImageProfile} />
        )}
        <p>{firstName + " " + lastName}</p>
        <p onClick={handleLogOut} className="logout">
          Log Out
        </p>
      </div>
    </SideListWrapper>
  );
};

export default SideList;
