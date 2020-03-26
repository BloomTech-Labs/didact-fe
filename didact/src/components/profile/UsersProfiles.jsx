import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Allprofile from "./Allprofile";
import PersonOwner from "./PersonOwner";
import PersonAdmin from "./PersonAdmin";
import PersonMod from "./PersonMod";
import PersonUser from "./PersonUser";
import { getUsersProfiles } from "../../store/actions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PersonWrapper, BoldDiv, NavButton } from "./ProfileStyles";
import { Navigator } from "../searchResults/SearchGeneralStyles";

const UsersProfiles = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const usersList = state.usersProfilesReducer.users;
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(getUsersProfiles());
  }, [dispatch]);

  return (
    <>
      <Navigator>
        <span
          style={
            filter === "all"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("all")}
        >
          All
        </span>
        <span
          style={
            filter === "owners"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("owners")}
        >
          Owner
        </span>
        <span
          style={
            filter === "admins"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("admins")}
        >
          Admins
        </span>
        <span
          style={
            filter === "moderators"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("moderators")}
        >
          Moderators
        </span>

        <span
          style={
            filter === "users"
              ? { borderBottom: "2px solid #242424" }
              : { borderBottom: "none" }
          }
          onClick={() => setFilter("users")}
        >
          Users
        </span>
      </Navigator>
      {(() => {
        switch (filter) {
          case "all":
            return <Allprofile {...props} user={user} usersList={usersList} />;
          case "owners":
            return usersList.map(person => (
              <PersonOwner
                {...props}
                setFilter="display"
                person={person}
                key={person.id}
                email={person.email}
                owner={person.owner}
                admin={person.admin}
                moderator={person.moderator}
              />
            ));
          case "admins":
            return usersList.map(person => (
              <PersonAdmin
                {...props}
                setFilter="display"
                person={person}
                key={person.id}
                email={person.email}
                owner={person.owner}
                admin={person.admin}
                moderator={person.moderator}
              />
            ));
          case "moderators":
            return usersList.map(person => (
              <PersonMod
                {...props}
                setFilter="display"
                person={person}
                key={person.id}
                email={person.email}
                owner={person.owner}
                admin={person.admin}
                moderator={person.moderator}
              />
            ));
          case "users":
            return usersList.map(person => (
              <PersonUser
                {...props}
                setFilter="display"
                person={person}
                key={person.id}
                email={person.email}
                owner={person.owner}
                admin={person.admin}
                moderator={person.moderator}
              />
            ));
          default:
            break;
        }
      })()}
    </>
  );
};

export default UsersProfiles;
