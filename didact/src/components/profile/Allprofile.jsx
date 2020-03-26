import React from "react";
import { PersonWrapper, BoldDiv, NavButton } from "./ProfileStyles";
import PersonOwner from "./PersonOwner";
import PersonAdmin from "./PersonAdmin";
import PersonMod from "./PersonMod";
import PersonUser from "./PersonUser";

const Allprofile = props => {
  const usersList = props.usersList;
  const user = props.user;
  return (
    <div>
      <BoldDiv
        style={
          user.owner === true
            ? { display: "", flexWrap: "wrap" }
            : { display: "none" }
        }
      >
        OWNERS
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
      </BoldDiv>

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

export default Allprofile;
