import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyProfile } from "../../store/actions";
import { Link } from "react-router-dom";
import {
  MyProfileStyleWrapper,
  HeaderStyled,
  ProfileAvatar,
  BioField,
  BioLabel,
  BioInput,
  BioButton,
  DiscordLinkDiv
} from "./myProfileStyle";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import discordLogo from "../../assets/discordLogo.png";

const MyProfile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const userName = state.onboardingReducer.user;
  const pic = state.myProfileReducer.image;
  const bio = state.myProfileReducer.bio;
  const interests = state.myProfileReducer.interests;
  const facebookLink = state.myProfileReducer.facebookLink;
  const githubLink = state.myProfileReducer.githubLink;
  const discordLink = state.myProfileReducer.discordLink;
  const twitterLink = state.myProfileReducer.twitterLink;
  const linkedInLink = state.myProfileReducer.linkedInLink;
  const externalEdLink = state.myProfileReducer.externalEdLink;

  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const lastName = userName.last_name
    ? userName.last_name.substring(0, 1).toUpperCase() +
      userName.last_name.substring(1)
    : null;

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <MyProfileStyleWrapper>
      <HeaderStyled>
        <p className="header-navs">
          <Link to="/">Dashboard</Link>
          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
        </p>
      </HeaderStyled>

      <ProfileAvatar>
        {userName.photo ? (
          <img
            src={userName.photo}
            alt="Profile"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              // marginTop: "20px",
              objectFit: "cover"
            }}
          />
        ) : (
          <PermIdentityIcon
            style={{
              color: "#242424BF",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              marginTop: "9%",
              objectFit: "cover"
            }}
          />
        )}

        <p className="name">{firstName + " " + lastName}</p>
      </ProfileAvatar>
      <div>
        <img src={pic}></img>
        <div>{bio}</div>
        <div>{interests}</div>
        <span>{facebookLink}</span>
        <span>{githubLink}</span>
        <span>{discordLink}</span>
        <span>{twitterLink}</span>
        <span>{linkedInLink}</span>
        <div>{externalEdLink}</div>
      </div>

      <div>
        <form>
          {/* <form onSubmit={handleSubmit}> */}
          <BioField>
            <BioLabel>Bio</BioLabel>
            <BioInput
              // s
              // onChange={handleChange}
              name="bio"
              placeholder="Bio"
              type="text"
            />
          </BioField>
          <BioButton type="submit">Submit</BioButton>
        </form>
      </div>
      <DiscordLinkDiv>
        <a href="https://discord.io/didact" target="_blank">
          <img src={discordLogo} alt="discord logo" />
          Join Our Discord
        </a>
      </DiscordLinkDiv>
    </MyProfileStyleWrapper>
  );
};

export default MyProfile;
