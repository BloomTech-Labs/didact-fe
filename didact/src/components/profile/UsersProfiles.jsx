import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonOwner from "./PersonOwner";
import PersonAdmin from "./PersonAdmin";
import PersonMod from "./PersonMod";
import PersonUser from "./PersonUser";
import { getUsersProfiles } from "../../store/actions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PersonWrapper, BoldDiv } from "./ProfileStyles";

const UsersProfiles = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const usersList = state.usersProfilesReducer.users;

  useEffect(() => {
    dispatch(getUsersProfiles());
  }, [dispatch]);

  return (
    <div>
      <BoldDiv>OWNERS</BoldDiv>
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
