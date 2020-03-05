import React, { useEffect, useState } from "react";
import { verifyToken } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { PageFlex } from "./PageStyles";
import { makeStyles } from "@material-ui/core/styles";

import { Mixpanel } from '../../utils/mixpanel'

import SearchFiltered from "../searchComponents/searchFiltered";

// import { Link } from "react-router-dom";
// import styled from "styled-components";

//Material UI Icons
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchIcon from "@material-ui/icons/Search";

// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

// Select Dropdown
// import { InputLabel, Select, MenuItem } from "@material-ui/core";

import DrawerComponent from "../drawer/Drawer";
import MobileDrawerComponent from "../drawer/MobileDrawer";
import MobileHeaderComponent from "../header/MobileHeader";
import Content from "../content/Content";
import { ProfileWrapper } from "./profileStyle";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#EEEEEE"
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3)
  },
  contentMobile: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: "63px"
  },
  contentShadow: {
    background: "rgba(0, 0, 0, 0.8)",
    filter: "brightness(50%)",
    overflowX: "hidden",
    zIndex: 100,
    height: "100vh",
    top: 0,
    left: 0,
    paddingLeft: "80px",
    padding: theme.spacing(2)
  },

  mainDrawerComponent: {},

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  // Search Functionality Styles
  searchDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    width: "345px",
    borderRadius: "7px",
    border: "1px solid black",
    padding: "0 6px",
    paddingLeft: "0%",
    height: "37px",
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,.5)"
  },

  formPart: {
    display: "flex",
    flexDirection: "row",
    height: "57px",
    width: "370px"
  },

  searchInput: {
    backgroundColor: "inherit",
    width: "340px",
    outline: "none",
    height: "57px",
    border: "none",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: "1.6rem",
    marginLeft: "5%"
  },

  filterDiv: {
    backgroundColor: "#eeeeee",
    marginRight: "8%",
    marginTop: "3%",
    borderRadius: "7px 0 0 7px",
    height: "35px",
    // width: "107px",
    outline: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    borderColor: "green",
    outline: "none !important"

    // boxShadow: "1px 1px 1px 1px rgba(0,0,0,.5)"
  },

  dropFilter: {
    marginTop: "8%",
    border: "none",
    outline: "none",
    borderRight: "1px solid black",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "#eeeeee"
    // display: "none"
  },

  searchButton: {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    height: "30px",
    marginTop: "3.4%",
    marginLeft: "-35%",
    borderRadius: "7px",
    background: "transparent",
    fontFamily: "open-sans",

    "&:hover": {
      background: "#ffffff"
      // border: "1px solid black"
    },
    "&:active": {
      boxShadow: "0 5px #666",
      transform: "translateY(4px)"
    },
    iconImageProfile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    }
  },

  searchIcon: {
    marginTop: "-1%"
  },

  searcher: {
    marginTop: "13%",
    marginLeft: "-4%",
    fontFamily: "open-sans"

    // fontSize: "1.5rem",
    // fontWeight: "bold"
  }
}));

function MainPage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const phoneSize = useMediaQuery("(max-width:600px)");
  const tabletSize = useMediaQuery("(max-width:770px, min-width: 601px");
  const mediumScreenSize = useMediaQuery("(max-width:920px)");
  const userName = useSelector(state => state.onboardingReducer.user);
  const token = localStorage.getItem("token");
  const [open, setOpen] = React.useState(true);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [values, setValues] = useState({
    search: "",
    filter: "title"
  });
  const [results, setResults] = useState();

  let dropHide = React.createRef();

  useEffect(
    _ => {
      dispatch(verifyToken(props.history));
    },
    [token, dispatch, props.history]
  );

  if (!localStorage.getItem("token")) {
    props.history.push("/landing");
  }

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  // const userName = useSelector(state => state.onboardingReducer.user);

  const handleLogOut = () => {
    localStorage.clear("token");
    props.history.push("/login");
  };

  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const lastName = userName.last_name
    ? userName.last_name.substring(0, 1).toUpperCase() +
      userName.last_name.substring(1)
    : null;

  //Needed for Header Search Function
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Mixpanel.track("Search Query")
    setResults(values);
    props.history.push("/results");
    // dropHide.style.display = "block";
    console.log(values);

    // setValues('')
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

  const closeHandleClick = () => {
    if (openMobile) setOpenMobile(false);
  };

  return (
    // MOBILE CODE ****************************************************************************
    <div className={classes.mainPageDiv}>
      <ProfileWrapper>
        <>
          {phoneSize || tabletSize ? (
            <div className={classes.root} onClick={() => closeHandleClick()}>
              <CssBaseline />
              <>
                <div>
                  <MobileDrawerComponent
                    handleDrawerOpenMobile={handleDrawerOpenMobile()}
                    openMobile={openMobile}
                    props={props}
                  />
                </div>
                <div>
                  <MobileHeaderComponent
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                    props={props}
                    tabletSize={tabletSize}
                    userName={userName}
                  />
                  <main
                    className={
                      openMobile ? classes.contentShadow : classes.contentMobile
                    }
                  >
                    <div className={classes.toolbar} />
                    <Content
                      phoneSize={phoneSize}
                      open={open}
                      {...props}
                      results={results}
                      values={values}
                      setValues={setValues}
                    />
                    {/*************************ADD COMPONENTS HERE *********************** */}
                  </main>
                </div>
              </>
              {/* {openMobile ?
                        (
                        <div className = {classes.scrollBarMobileFix}>
                        </div>
                        ) : ( 
                        null )
                         } */}
            </div>
          ) : (
            // END OF MOBILE CODE *******************************************************************
            // BEGINNING OF DESKTOP CODE ************************************************************
            <div className={classes.root}>
              <CssBaseline />
              <PageFlex>
                <div
                  className="drawer"
                  // style={{ border: "3px solid black", marginTop: "10%" }}
                >
                  <DrawerComponent
                    handleDrawerOpen={handleDrawerOpen}
                    open={open}
                    props={props}
                  />
                </div>
                <div className="headerMain">
                  {/* <SearchFiltered /> */}
                  {/* <HeaderComponent props = {props} open={open} /> */}
                  {/* <HeaderComponent open={open} /> */}
                  <div className="header">
                    {/* Search Functionality Below */}

                    {props.location.pathname === "/results" ? (
                      <div className={classes.searchDiv}>
                        <form
                          className={classes.formPart}
                          onSubmit={handleSubmit}
                        >
                          <div className={classes.filterDiv}>
                            <select
                              className={classes.dropFilter}
                              value={values.filter}
                              onChange={handleChange("filter")}
                              // ref={dropHide}
                            >
                              <option value="title">Title</option>
                              <option value="topic">Topic</option>
                              <option value="creator">Creator</option>
                              <option value="description">Description</option>
                              <option value="tag">Tag</option>
                            </select>
                          </div>
                          <input
                            className={classes.searchInput}
                            type="text"
                            value={values.search}
                            onChange={handleChange("search")}
                          />
                          <button
                            className={classes.searchButton}
                            type="submit"
                            onSubmit={handleSubmit}
                          >
                            <SearchIcon
                              className={classes.searchIcon}
                              style={{
                                fontSize: "1.8rem",
                                marginRight: "5px",
                                color: "black"
                              }}
                            />
                            <p className={classes.searcher}>Search</p>
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className={classes.searchDiv}>
                        <form
                          className={classes.formPart}
                          onSubmit={handleSubmit}
                        >
                          <input
                            className={classes.searchInput}
                            type="text"
                            value={values.search}
                            onChange={handleChange("search")}
                          />
                          <button
                            className={classes.searchButton}
                            type="submit"
                            onSubmit={handleSubmit}
                          >
                            <SearchIcon
                              className={classes.searchIcon}
                              style={{
                                fontSize: "1.8rem",
                                marginRight: "5px",
                                color: "black"
                              }}
                            />
                            <p className={classes.searcher}>Search</p>
                          </button>
                        </form>
                      </div>
                    )}

                    <div className="profileSection">
                      {userName.photo ? (
                        <img
                          src={userName.photo}
                          alt="Profile"
                          className={classes.iconImageProfile}
                        />
                      ) : (
                        <PermIdentityIcon
                          className={classes.iconImageProfile}
                        />
                      )}
                      <p>{firstName + " " + lastName}</p>
                      <p onClick={handleLogOut} className="logout">
                        Log Out
                      </p>
                    </div>
                  </div>
                  <main className={classes.content}>
                    {/* <div className={classes.toolbar} /> */}
                    <Content
                      mediumScreenSize={mediumScreenSize}
                      phoneSize={phoneSize}
                      open={open}
                      setValues={setValues}
                      values={values}
                      tabletSize={tabletSize}
                      {...props}
                      results={results}
                    />
                    {/*************************ADD COMPONENTS HERE *********************** */}
                  </main>
                </div>
              </PageFlex>
            </div>
          )}
        </>
      </ProfileWrapper>
    </div>
  );
}

export default MainPage;
