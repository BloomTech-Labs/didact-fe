import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { verifyToken } from "../../store/actions/index.js";
=======
import {
  verifyToken,
  getTools,
  getSources,
  getExternalArticles,
  getArticles,
  getMyProfile
} from "../../store/actions/index.js";
>>>>>>> bdf6d6a430ec40e43c8aebede2c202c5a96b4175
import { useDispatch, useSelector } from "react-redux";
import { PageFlex, MainBorder } from "./PageStyles";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { Mixpanel } from "../../utils/mixpanel";

import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
<<<<<<< HEAD
import SearchIcon from "@material-ui/icons/Search";

=======
import { courseEndPoint, getLearningPaths } from "../../store/actions";
>>>>>>> bdf6d6a430ec40e43c8aebede2c202c5a96b4175
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import DrawerComponent from "../drawer/Drawer";
import MobileDrawerComponent from "../drawer/MobileDrawer";
import MobileHeaderComponent from "../header/MobileHeader";
import Content from "../content/Content";
import { ProfileWrapper } from "./profileStyle";
import ProfilePopOver from "./ProfilePopover";
import SearchBar from "../searchResults/SearchBar";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#EEEEEE"
  },
  content: {
    flexGrow: 1
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
  }
}));

function MainPage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const phoneSize = useMediaQuery("(max-width:600px)");
  const tabletSize = useMediaQuery("(max-width:770px, min-width: 601px");
  const mediumScreenSize = useMediaQuery("(max-width:920px)");
  const state = useSelector(state => state);
  const userName = state.onboardingReducer.user;
  const owner = state.onboardingReducer.user.owner;
  const admin = state.onboardingReducer.user.admin;
  const token = localStorage.getItem("token");

  const image = state.myProfileReducer.myProfile.image;

  const [open, setOpen] = React.useState(true);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [values, setValues] = useState({
    search: "",
    filter: "title"
  });
  const [results, setResults] = useState();

  useEffect(() => {
    dispatch(verifyToken(props.history));
  }, [token, dispatch, props.history]);

  useEffect(() => {
    if (props.location.pathname !== "/results") {
      setValues({ search: "", filter: "title" });
    }
  }, [props.location.pathname]);

  if (!localStorage.getItem("token")) {
    props.history.push("/landing");
  }

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

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
    Mixpanel.track("Search Query");
    setResults(values);
    props.history.push("/results");
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

  // popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? "simple-popover" : undefined;

  useEffect(() => {
    dispatch(getMyProfile(userName.id));
  }, [dispatch, userName.id]);

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
                      setResults={setResults}
                    />
                    {/*************************ADD COMPONENTS HERE *********************** */}
                  </main>
                </div>
              </>
            </div>
          ) : (
            // END OF MOBILE CODE *******************************************************************
            // BEGINNING OF DESKTOP CODE ************************************************************
            <div className={classes.root}>
              <CssBaseline />
              <PageFlex>
                <div className="drawer">
                  <DrawerComponent
                    handleDrawerOpen={handleDrawerOpen}
                    open={open}
                    props={props}
                  />
                </div>
                <div className="headerMain">
                  <div className="header">
                    <SearchBar
                      props={props}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      values={values}
                    />

                    <div className="profileSection">
                      {(owner === true &&
                        props.location.pathname !== "/users") ||
                      (admin === true &&
                        props.location.pathname !== "/users") ? (
                        <p className="usersLink">
                          <Link to={`/users`} style={{ color: "#242424" }}>
                            Edit Users
                          </Link>
                        </p>
                      ) : null}

                      <p
                        className="profile-avatar"
                        style={{ cursor: "pointer" }}
                        onClick={handleClick}
                      >
                        {userName.photo ? (
                          <img
                            src={userName.photo}
                            alt="Profile"
                            className={classes.iconImageProfile}
                            style={{ cursor: "pointer" }}
                            onClick={handleClick}
                          />
                        ) : (
                          // <PermIdentityIcon
                          //   className={classes.iconImageProfile}
                          //   style={{
                          //     color: "#242424BF"
                          //   }}
                          // />
                          <img
                            src={image}
                            alt={"profile pic"}
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              margin: "2% 0% 0 0%"
                            }}
                          />
                        )}
                      </p>
                      <p
                        className="name"
                        style={{ cursor: "pointer" }}
                        onClick={handleClick}
                      >
                        {firstName + " " + lastName}
                      </p>
                      <p
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon
                          style={{
                            cursor: "pointer",
                            fontSize: "1.8rem",
                            color: "#242424BF"
                          }}
                        />
                      </p>

                      <ProfilePopOver
                        handleClose={handleClose}
                        openPop={openPop}
                        id={id}
                        handleLogOut={handleLogOut}
                        anchorEl={anchorEl}
                        firstName={firstName}
                        lastName={lastName}
                        userName={userName}
                      />
                    </div>
                  </div>
                  {props.location.pathname === "/results" ? null : (
                    <MainBorder />
                  )}
                  <main className={classes.content}>
                    <Content
                      mediumScreenSize={mediumScreenSize}
                      phoneSize={phoneSize}
                      open={open}
                      setValues={setValues}
                      values={values}
                      tabletSize={tabletSize}
                      setResults={setResults}
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
