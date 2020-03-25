import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PersonWrapper } from "./ProfileStyles";

const PersonOwner = props => {
  const person = props.person;
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  return (
    <div
      className="person"
      style={person.owner !== true ? { display: "none" } : { display: "" }}
    >
      {person.image ? (
        <img
          src={person.image}
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
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            margin: "2% 70% 0 0%"
          }}
        />
      )}
      <p className="pEmail">{person.email}</p>
      <p className="pOwner">owner={JSON.stringify(person.owner)}</p>
      <p className="pAdmin">admin={JSON.stringify(person.admin)}</p>
      <p className="pModerator">moderator={JSON.stringify(person.moderator)}</p>
      <Link className="pEdit" to={`/users/${person.id}/edit`}>
        Edit
      </Link>
    </div>
  );
};

export default PersonOwner;
