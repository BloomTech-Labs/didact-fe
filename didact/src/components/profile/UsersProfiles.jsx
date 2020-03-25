import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonOwner from "./PersonOwner";
import PersonAdmin from "./PersonAdmin";
import PersonMod from "./PersonMod";
import PersonUser from "./PersonUser";
import { getUsersProfiles } from "../../store/actions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PersonWrapper, BoldDiv, NavButton } from "./ProfileStyles";

const UsersProfiles = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const usersList = state.usersProfilesReducer.users;
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    dispatch(getUsersProfiles());
  }, [dispatch]);

  const toggleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div>
      <NavButton>All</NavButton>
      <NavButton onClick={toggleFilter}>Owners</NavButton>
      <NavButton>Admins</NavButton>
      <NavButton>Moderators</NavButton>
      <NavButton>Users</NavButton>

      <BoldDiv
        style={
          user.owner === true
            ? { display: "", flexWrap: "wrap" }
            : { display: "none" }
        }
      >
        OWNERS
      </BoldDiv>
      <PersonWrapper
        className="nameIt"
        style={
          user.owner === true
            ? { display: "", flexWrap: "wrap" }
            : { display: "none" }
        }
      >
        {usersList &&
          usersList.map(person => (
            <PersonOwner
              setFilter="display"
              person={person}
              key={person.id}
              email={person.email}
              owner={person.owner}
              admin={person.admin}
              moderator={person.moderator}
            />
          ))}
      </PersonWrapper>

      <BoldDiv>ADMINS</BoldDiv>
      <PersonWrapper
        style={
          user.owner === true || user.admin === true
            ? { display: "", flexWrap: "wrap" }
            : { display: "none" }
        }
      >
        {usersList &&
          usersList.map(person => (
            <PersonAdmin
              person={person}
              key={person.id}
              email={person.email}
              owner={person.owner}
              admin={person.admin}
              moderator={person.moderator}
            />
          ))}
      </PersonWrapper>
      <BoldDiv
        style={
          user.owner === true || user.admin === true || user.moderator === true
            ? { display: "", flexWrap: "wrap" }
            : { display: "none" }
        }
      >
        MODERATORS
      </BoldDiv>
      <PersonWrapper>
        {usersList &&
          usersList.map(person => (
            <PersonMod
              person={person}
              key={person.id}
              email={person.email}
              owner={person.owner}
              admin={person.admin}
              moderator={person.moderator}
            />
          ))}
      </PersonWrapper>
      <BoldDiv>USERS</BoldDiv>
      <PersonWrapper>
        {usersList &&
          usersList.map(person => (
            <PersonUser
              person={person}
              key={person.id}
              email={person.email}
              owner={person.owner}
              admin={person.admin}
              moderator={person.moderator}
            />
          ))}
      </PersonWrapper>
    </div>
  );
};

export default UsersProfiles;
