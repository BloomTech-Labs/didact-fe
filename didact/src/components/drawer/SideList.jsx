import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
////

//Material UI Icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import BuildIcon from "@material-ui/icons/Build";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SchoolIcon from "@material-ui/icons/School";
import AllOutIcon from "@material-ui/icons/AllOut";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BookIcon from "@material-ui/icons/Book";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import { SideListWrapper } from "./SideListStyles";

// import { useSelector, useDispatch } from "react-redux";
// const state = useSelector(state => state);
// const owner = state.onboardingReducer.user.owner

const SideList = ({ props }) => {
  const drawerStyles = makeStyles(theme => ({
    activeTab: {
      backgroundColor: "#ffffff",
      borderRadius: "0 7px 7px 0",
      width: "225px",
      height: "50px",
      margin: "10px 0px",
      // borderLeft: "5px solid #242424BF",
      "& .dashIcon": {
        color: "#242424BF"
      },
      "& .folderIcon": { color: "#52BBB4" },
      "& .boxIcon": { color: "#F8A7A4" },
      "& .settingsIcon": { color: "#b3987b" }
    },

    listing: {
      display: "flex",
      flexDirection: "column",
      margin: " 0 auto",
      padding: 0,
      height: "100vh"
    },
    dashboardDiv: {
      display: "flex",
      height: "55px",
      margin: "5px 0px",
      fontSize: "28px"
      // padding: "0px 0px 50px 0px"
    },
    paraDiv: {
      marginLeft: "10%",
      fontWeight: "bold",
      fontSize: "14px"
    },

    coursesDiv: {
      display: "flex",
      height: "55px",
      margin: "5px 0px"
    },
    learningPathDiv: {
      width: "100%",

      display: "flex",
      margin: "5px 0px"
    },
    resourcesDiv: {
      width: "100%",
      outline: "none !important",
      display: "flex",
      margin: "5px 0px"
    },

    listItem: {
      width: "225px",
      marginTop: "19px",
      height: "55px"
    },

    arrow: {
      textAlign: "right",
      paddingRight: "10%",
      width: "100%",
      fontSize: "2rem",
      color: "#5b5b5b",
      margin: "0 6px "
    },

    collapseNav: {
      textDecoration: "none",
      textAlign: "left",
      marginRight: "20%"
    },
    nested: {
      paddingLeft: theme.spacing(4),
      marginLeft: "20%",
      textDecoration: "none",
      color: "#242424"
    },

    bottomNav: {
      display: "flex",
      flexDirection: "column",
      marginTop: "35px",
      padding: 0
    },

    bottomListItem: {
      width: "225px",
      margin: "2px",
      height: "35px"
    },

    bottomLink: {
      marginLeft: "30%",
      fontWeight: "bold",
      textAlign: "left",
      marginTop: "2.4%"
    },
    bottomLinkBottom: {
      marginRight: "75%",
      fontWeight: "bold"
    },

    nestedSmall: {
      paddingLeft: theme.spacing(4),
      margin: "0 0 0 -5%",
      textDecoration: "none",
      color: "#242424"
    },
    listItemSmall: {
      display: "flex"
    }
  }));

  const classes = drawerStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [courseOpen, courseSetOpen] = React.useState(false);

  const handleClickCourse = () => {
    courseSetOpen(!courseOpen);
  };

  const [resOpen, resSetOpen] = React.useState(false);

  const resourcesHandleClick = () => {
    resSetOpen(!resOpen);
  };

  return (
    <SideListWrapper>
      {props.open ? (
        <ul className={classes.listing}>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{
              color: "#242424BF",
              borderLeft: "5px solid #242424BF"
            }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Dashboard"
          >
            <div className={classes.dashboardDiv}>
              <DashboardIcon
                className="dashIcon"
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px"
                }}
              />
              <p className={classes.paraDiv}>Dashboard</p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "30%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      marginTop: "30%"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <NavLink
            onClick={handleClickCourse}
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{
              color: "#242424BF",
              borderLeft: " 5px solid #52BBB4"
            }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Add Course"
          >
            <div className={classes.coursesDiv}>
              <FolderOpenIcon
                className="folderIcon"
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px",
                  color: "#52BBB4"
                }}
              />
              <p className={classes.paraDiv}>Courses</p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "25%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      // marginTop: "6px",
                      color: "#5b5b5b",
                      marginTop: "25%"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={courseOpen} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nested}>
                <Link
                  to="/courses/all"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  All Courses
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/courses/yours/add"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Create Course
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            onClick={handleClick}
            to="/learning-paths"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{
              color: "#242424BF",
              borderLeft: "5px solid #F8A7A4"
            }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Learning Paths"
          >
            <div className={classes.learningPathDiv}>
              <InboxIcon
                className="boxIcon"
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px",
                  color: "#F8A7A4"
                }}
              />
              <p className={classes.paraDiv}>Learning Paths</p>

              {props.props.match.path.includes("/learning-paths") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "65%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "65%" }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/current"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Current
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/add"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Create
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/join"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Join
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            onClick={resourcesHandleClick}
            to="/resources"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{
              color: "#242424BF",
              borderLeft: "5px solid #b3987b"
            }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Resources"
          >
            <div className={classes.resourcesDiv}>
              <SettingsIcon
                className="settingsIcon"
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px",
                  color: "#b3987b"
                }}
              />
              <p className={classes.paraDiv}>Resources</p>
              {props.props.match.path.includes("/") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "30%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "30%" }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={resOpen} timeout="auto" unmountOnExit>
              <ListItem className={classes.nested}>
                <Link
                  to="/tools"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Tools
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/sources"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Sources
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/articles"
                  style={{
                    fontSize: "12px",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Articles
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <div className={classes.bottomNav}>
            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "#242424BF" }}
              // activeClassName={classes.activeTab}
              className={classes.bottomListItem}
              key="about"
            >
              <p className={classes.bottomLink}>About</p>
            </NavLink>

            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "#242424BF" }}
              // activeClassName={classes.activeTab}
              className={classes.bottomListItem}
              key="contact"
            >
              <p className={classes.bottomLink}>Contact</p>
            </NavLink>
          </div>
        </ul>
      ) : (
        //********************************************/
        ///********MINIMIZED COMPONENT ***********************
        <ul className={classes.listing}>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{
              color: "242424BF",
              borderLeft: "5px solid 242424BF"
            }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Dashboard"
          >
            <div className={classes.dashboardDiv}>
              <DashboardIcon
                className="dashIcon"
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px"
                }}
              />
              <p className={classes.paraDiv}>Dashboard</p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "30%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      marginTop: "30%"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <NavLink
            onClick={handleClickCourse}
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Add Course"
          >
            <div className={classes.coursesDiv}>
              <FolderOpenIcon
                className="folderIcon"
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px",
                  color: "#52BBB4"
                }}
              />
              <p className={classes.paraDiv}>Courses</p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "25%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      // marginTop: "6px",
                      color: "#5b5b5b",
                      marginTop: "25%"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={courseOpen} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/courses/all"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <AllOutIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/courses/yours/add"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <CreateIcon />
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            onClick={handleClick}
            to="/learning-paths"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Learning Paths"
          >
            <div className={classes.learningPathDiv}>
              <InboxIcon
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px",
                  color: "#F8A7A4"
                }}
              />
              <p className={classes.paraDiv}>Learning Paths</p>

              {props.props.match.path.includes("/learning-paths") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "65%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "65%" }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/learning-paths/current"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <BookIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/learning-paths/add"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <CreateIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/learning-paths/join"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <LinearScaleIcon />
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            onClick={resourcesHandleClick}
            to="/resources"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Resources"
          >
            <div className={classes.resourcesDiv}>
              <SettingsIcon
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px",
                  color: "#b3987b"
                }}
              />
              <p className={classes.paraDiv}>Resources</p>
              {props.props.match.path.includes("/") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "30%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "30%" }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={resOpen} timeout="auto" unmountOnExit>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/tools"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <BuildIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/sources"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  <SchoolIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.nestedSmall}>
                <Link
                  to="/articles"
                  style={{
                    fontSize: "12px",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  <LibraryBooksIcon />
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <div className={classes.bottomNav}>
            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "#242424BF" }}
              // activeClassName={classes.activeTab}
              className={classes.bottomListItem}
              key="about"
            >
              <p className={classes.bottomLinkBottom}>About</p>
            </NavLink>

            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "#242424BF" }}
              // activeClassName={classes.activeTab}
              className={classes.bottomListItem}
              key="contact"
            >
              <p className={classes.bottomLinkBottom}>Contact</p>
            </NavLink>
          </div>
        </ul>
      )}
    </SideListWrapper>
  );
};

export default SideList;
