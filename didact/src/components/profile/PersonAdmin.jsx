import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PersonWrapperII } from "./ProfileStyles";

const PersonAdmin = props => {
  const person = props.person;
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  return (
    <div
      className="person"
      style={person.admin !== true ? { display: "none" } : { display: "" }}
    >
      {person.image ? (
        <img
          src={person.image}
          alt="radiobtn"
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            margin: "2% 70% 0 0%"
          }}
        />
      ) : (
        <img
          src={
            "https://res.cloudinary.com/klawd/image/upload/v1584550569/wq3oxtstbdkg8s9jxuhb.png"
          }
          alt="radiobtn"
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            margin: "2% 70% 0 0%"
          }}
        />
      )}
      <p className="pEmail">{person.email}</p>
      <p
        style={person.owner !== true ? { display: "" } : { display: "none" }}
        className="pOwner"
      >
        ⚪ Owner
      </p>
      <p
        style={person.owner === true ? { display: "" } : { display: "none" }}
        className="pOwner"
      >
        🔵 Owner
      </p>
      <p
        style={person.admin !== true ? { display: "" } : { display: "none" }}
        className="pAdmin"
      >
        ⚪ Admin
      </p>
      <p
        style={person.admin === true ? { display: "" } : { display: "none" }}
        className="pAdmin"
      >
        🔵 Admin
      </p>
      <p
        style={
          person.moderator !== true ? { display: "" } : { display: "none" }
        }
        className="pModerator"
      >
        ⚪ Moderator
      </p>
      <p
        style={
          person.moderator === true ? { display: "" } : { display: "none" }
        }
        className="pModerator"
      >
        🔵 Moderator
      </p>
      <Link className="pEdit" to={`/users/${person.id}/edit`}>
        Edit
      </Link>
    </div>
  );
};

export default PersonAdmin;
