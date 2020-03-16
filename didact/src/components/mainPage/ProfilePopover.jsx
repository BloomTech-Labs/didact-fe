import React, { useEffect, useState } from "react";

import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const ProfilePopOver = ({
  handleClose,
  openPop,
  id,
  anchorEl,
  handleLogOut
}) => {
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
      <ul>
        <h2>User Profile Info</h2>
        <a
          href="https://discordapp.com/invite/YFZdRp"
          className="discord-link"
          target="_blank"
        >
          Discord
        </a>
        <Link onClick={handleLogOut} className="logout">
          Logout
        </Link>
      </ul>
    </Popover>
  );
};

export default ProfilePopOver;
