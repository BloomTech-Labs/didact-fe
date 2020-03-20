import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyProfile, addMyProfile, editMyProfile } from "../../store/actions";
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

const MyProfile = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const id = state.onboardingReducer.user.id;
  const myProfile = state.myProfileReducer.myProfile;
  const userName = state.onboardingReducer.user;
  const image = state.myProfileReducer.myProfile.image;
  const bio = state.myProfileReducer.myProfile.bio;
  const facebookLink = state.myProfileReducer.myProfile.facebookLink;
  const githubLink = state.myProfileReducer.myProfile.githubLink;
  const discordLink = state.myProfileReducer.myProfile.discordLink;
  const twitterLink = state.myProfileReducer.myProfile.twitterLink;
  const linkedInLink = state.myProfileReducer.myProfile.linkedInLink;
  const externalEdLink = state.myProfileReducer.myProfile.externalEdLink;

  const [myProfileEdit, setMyProfileEdit] = useState(true);

  const toggleEdit = () => {
    setMyProfileEdit(!myProfileEdit);
  };

  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const lastName = userName.last_name
    ? userName.last_name.substring(0, 1).toUpperCase() +
      userName.last_name.substring(1)
    : null;

  const [changes, setChanges] = useState({
    image: image,
    bio: "",
    facebookLink: "",
    githubLink: "",
    discordLink: "",
    twitterLink: "",
    linkedInLink: "",
    externalEdLink: ""
  });

  useEffect(() => {
    dispatch(getMyProfile(id));
  }, [dispatch, id]);

  useEffect(() => {
    setChanges({
      image: image,
      bio: bio,
      facebookLink: facebookLink,
      githubLink: githubLink,
      discordLink: discordLink,
      twitterLink: twitterLink,
      linkedInLink: linkedInLink,
      externalEdLink: externalEdLink
    });
  }, [myProfile]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editMyProfile(id, changes));
    toggleEdit();

    // props.history.push("/my-profile");
  };

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
        {myProfileEdit ? (
          <div>
            <img src={image}></img>
            <div>{bio}</div>
            <span>{facebookLink}</span>
            <span>{githubLink}</span>
            <span>{discordLink}</span>
            <span>{twitterLink}</span>
            <span>{linkedInLink}</span>
            <div>{externalEdLink}</div>
            <button type="submit" onClick={toggleEdit}>
              Edit
            </button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="bio"
                value={changes.bio}
                onChange={handleChange}
                name="bio"
              ></input>
              <input
                placeholder="Facebook Link"
                value={changes.facebookLink}
                onChange={handleChange}
                name="facebookLink"
              ></input>
              <input
                placeholder="Github Link"
                value={changes.githubLink}
                onChange={handleChange}
                name="githubLink"
              ></input>
              <input
                placeholder="Discord Link"
                value={changes.discordLink}
                onChange={handleChange}
                name="discordLink"
              ></input>
              <input
                placeholder="Twitter Link"
                value={changes.twitterLink}
                onChange={handleChange}
                name="twitterLink"
              ></input>
              <input
                placeholder="linkedIn Link"
                value={changes.linkedInLink}
                onChange={handleChange}
                name="linkedInLink"
              ></input>
              <input
                placeholder="External Ed Link"
                value={changes.externalEdLink}
                onChange={handleChange}
                name="externalEdLink"
              ></input>
              <button type="submit">Update</button>
            </form>
          </div>
        )}
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
