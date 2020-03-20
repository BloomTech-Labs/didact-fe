import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Popover from "@material-ui/core/Popover";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Link } from "react-router-dom";

// STYLING

const useStyles = makeStyles(theme => ({
  mainPopDiv: {
    width: "250px"
  },
  avatarDiv: {
    margin: "1% 0% 1% 15%"
  },

  name: {
    margin: "1% 0% 1% 5%"
  },

  unOrderedList: {
    marginRight: "10%"
  },

  popTitle: {},
  popNav: {
    display: "flex",
    flexDirection: "column"
  },

  popLinks: { margin: "5px 0px 5px 0px" }
}));

// Profile Function

const ProfilePopOver = ({
  firstName,
  lastName,
  userName,
  handleClose,
  openPop,
  id,
  anchorEl,
  handleLogOut
}) => {
  const classes = useStyles();

  // const dispatch = useDispatch();
  return (
    <Popover
      id={id}
      open={openPop}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
    >
      <div className={classes.mainPopDiv}>
        <div className={classes.avatarDiv}>
          <p>
            {userName.photo ? (
              <img
                src={userName.photo}
                alt="Profile"
                className={classes.iconImageProfile}
              />
            ) : (
              <PermIdentityIcon
                className={classes.iconImageProfile}
                style={{
                  color: "#242424BF"
                }}
              />
            )}
          </p>
        </div>
        <p className={classes.name}>{firstName + " " + lastName}</p>
        <ul className={classes.unOrderedList}>
          <div className={classes.popNav}>
            <Link to={`/my-profile`} style={{ color: "#242424" }}>
              My Profile
            </Link>
            {/* <a
              href="https://discord.io/didact"
              className={classes.popLinks}
              target="_blank"
            >
              Discord
            </a> */}
            <Link to="#" onClick={handleLogOut} className={classes.popLinks}>
              Logout
            </Link>
          </div>
        </ul>
        {/* <iframe
          src="https://discordapp.com/widget?id=689132221864738902&theme=dark"
          width="230"
          height="250"
          allowtransparency="true"
          frameborder="0"
          style={{ marginLeft: "4%" }}
        ></iframe> */}
      </div>
    </Popover>
  );
};

export default ProfilePopOver;
