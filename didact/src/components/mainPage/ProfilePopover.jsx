import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
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

const ProfilePopOver = ({
  handleClose,
  openPop,
  id,
  anchorEl,
  handleLogOut
}) => {
  const classes = useStyles();
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
        <ul className={classes.unOrderedList}>
          <h3 className={classes.popTitle}>User Profile Info</h3>
          <div className={classes.popNav}>
            <a
              href="https://discordapp.com/invite/YFZdRp"
              className={classes.popLinks}
              target="_blank"
            >
              Discord
            </a>
            <Link onClick={handleLogOut} className={classes.popLinks}>
              Logout
            </Link>
          </div>
        </ul>
      </div>
    </Popover>
  );
};

export default ProfilePopOver;
