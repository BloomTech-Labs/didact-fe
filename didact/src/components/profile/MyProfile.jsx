import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMyProfile,
  editMyProfile,
  editMyPic,
  getUserById,
  editUser
} from "../../store/actions";
import { Link } from "react-router-dom";

// STYLED COMPONENTS *******************
import {
  MyProfileStyleWrapper,
  HeaderStyled,
  ProfileAvatar,
  DidactProfileButton,
  DiscordLinkDiv,
  EditProfileDiv,
  EmailChange
} from "./myProfileStyle";

// ICONS/IMAGES ************************
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import discordLogo from "../../assets/discordLogo.png";

// MATERIAL UI *************************
import { makeStyles } from "@material-ui/core/styles";

const MyProfile = props => {
  // Material UI**************************************

  // ****************************

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
  const user = state.onboardingReducer.user;
  const person = state.usersProfilesReducer.person;
  // const email = state.myProfileReducer.myProfile.email;

  const [userChanges, setUserChanges] = useState({
    email: person.email
  });

  useEffect(() => {
    setUserChanges({
      email: person.email
    });
  }, [person.email]);

  const handleUserChange = e => {
    setUserChanges({ ...userChanges, email: e.target.value });
  };
  const noToggleEdit = () => {
    setMyProfileEdit(myProfileEdit);
  };

  const handleUserSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", userChanges.email);
    dispatch(editUser(id, userChanges));

    alert("Successfully changed login credentials");
    noToggleEdit();
  };

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

  const [changesPic, setChangesPic] = useState({
    image: image
  });

  const [changes, setChanges] = useState({
    image: changesPic,
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
      image: myProfile.image,
      bio: bio,
      facebookLink: facebookLink,
      githubLink: githubLink,
      discordLink: discordLink,
      twitterLink: twitterLink,
      linkedInLink: linkedInLink,
      externalEdLink: externalEdLink
    });
  }, [myProfile]);

  useEffect(() => {
    setChangesPic({
      image: myProfile.image
    });
  }, [myProfile.image]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editMyProfile(id, changes));
    toggleEdit();
  };

  const handleImage = e => {
    setChangesPic({ ...changesPic, image: e.target.files[0] });
  };

  //EditUser handleSubmit
  const handleImgSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", changesPic.image);
    dispatch(editMyPic(id, formData)).then(() => {
      dispatch(getMyProfile(id));
      alert("Successfully updated new profile pic");
    });
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
              objectFit: "cover"
            }}
          />
        ) : (
          <img
            src={image}
            alt={"profile pic"}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              margin: "2% 0% 0 0%"
            }}
          />
          // <PermIdentityIcon
          //   style={{
          //     color: "#242424BF",
          //     width: "20px",
          //     height: "20px",
          //     borderRadius: "50%",
          //     marginTop: "9%",
          //     objectFit: "cover"
          //   }}
          // />
        )}

        <p className="name">{firstName + " " + lastName}</p>
      </ProfileAvatar>
      <div className="profile-all">
        {myProfileEdit ? (
          <div
            style={{
              margin: "0 100% 0 0",
              width: "100%"
            }}
          >
            <img
              src={image}
              alt={"profile pic"}
              style={{
                height: "120px",
                width: "120px",
                borderRadius: "50%",
                margin: "2% 70% 0 0%"
              }}
            ></img>
            <DidactProfileButton
              type="submit"
              onClick={toggleEdit}
              style={{ margin: "1% 70% 5% 0%" }}
            >
              Edit My Profile
            </DidactProfileButton>

            <div
              className="icon-links"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "3% 0% 0% 0%"
              }}
            >
              {facebookLink ? (
                <p>
                  <a
                    href={facebookLink}
                    target="_blank"
                    style={{
                      paddingRight: "5px",
                      textDecoration: "none",
                      color: "#3b5998"
                    }}
                  >
                    <FacebookIcon style={{ fontSize: "4rem" }} />
                  </a>
                </p>
              ) : (
                <></>
              )}
              {githubLink ? (
                <p>
                  <a
                    href={githubLink}
                    target="_blank"
                    style={{
                      padding: "5px",
                      textDecoration: "none",
                      color: "#24292e"
                    }}
                  >
                    <GitHubIcon
                      style={{ fontSize: "3.3rem", marginTop: "5%" }}
                    />
                  </a>
                </p>
              ) : (
                <></>
              )}
              {discordLink ? (
                <p>
                  <a
                    href={discordLink}
                    target="_blank"
                    style={{
                      padding: "5px",
                      textDecoration: "none"
                    }}
                  >
                    <img
                      src={discordLogo}
                      style={{ height: "40px" }}
                      alt="discord logo"
                    />
                  </a>
                </p>
              ) : (
                <></>
              )}
              {twitterLink ? (
                <p>
                  <a
                    href={twitterLink}
                    target="_blank"
                    style={{
                      padding: "5px",
                      textDecoration: "none",
                      color: "#00acee"
                    }}
                  >
                    <TwitterIcon style={{ fontSize: "3.3rem" }} />
                  </a>
                </p>
              ) : (
                <></>
              )}
              {linkedInLink ? (
                <p>
                  <a
                    href={linkedInLink}
                    target="_blank"
                    style={{
                      padding: "5px",
                      textDecoration: "none",
                      color: "#0e76a8"
                    }}
                  >
                    <LinkedInIcon style={{ fontSize: "4rem" }} />
                  </a>
                </p>
              ) : (
                <></>
              )}
            </div>
            {/* <div>
              {externalEdLink ? (
                <p>
                  <a href={externalEdLink} target="_blank">
                    {externalEdLink}
                  </a>
                </p>
              ) : (
                <></>
              )}
            </div> */}

            <p
              className="bio-paragraph"
              style={{
                textAlign: "left",
                margin: "-25% 0% 1% 35%"
              }}
            >
              {bio}
            </p>

            <DiscordLinkDiv>
              <a href="https://discord.io/didact" target="_blank">
                <img src={discordLogo} alt="discord logo" />
                <span>JOIN US ON DISCORD</span>
              </a>
            </DiscordLinkDiv>
            <iframe
              src="https://discordapp.com/widget?id=689132221864738902&theme=dark"
              width="230"
              height="250"
              allowtransparency="true"
              frameborder="0"
              style={{ margin: "-6% 80% 0 0" }}
            ></iframe>
          </div>
        ) : (
          <EditProfileDiv style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={image}
              style={{
                height: "120px",
                width: "120px",
                borderRadius: "50%",
                margin: "2% 70% 0 0%"
              }}
            ></img>
            <form onSubmit={handleImgSubmit} className="imgForm">
              <div>
                <label>Image</label>
                <input type="file" onChange={handleImage} name="image" />
              </div>
              <DidactProfileButton>submit new pic</DidactProfileButton>
            </form>

            <EmailChange>
              <form onSubmit={handleUserSubmit} className="email-form">
                <input
                  placeholder="Enter new email"
                  value={userChanges.email}
                  onChange={handleUserChange}
                  name="email"
                ></input>
                {/* <input
                  placeholder="Enter new password"
                  value={userChanges.password}
                  onChange={handleUserChange}
                  name="password"
                ></input> */}
                <DidactProfileButton>Change Email</DidactProfileButton>
              </form>
              <div style={{ margin: "2% 90% 0 0" }}></div>
            </EmailChange>
            <p>{user.email}</p>

            <form onSubmit={handleSubmit}>
              <label>About Me</label>
              <textarea
                placeholder=" Enter Bio"
                value={changes.bio}
                onChange={handleChange}
                name="bio"
              ></textarea>

              <label>
                <FacebookIcon
                  className="label-icons"
                  style={{
                    margin: "0 100% 0 0",
                    color: "#3b5998",
                    fontSize: "2rem"
                  }}
                />
              </label>
              <input
                placeholder="Facebook Link"
                value={changes.facebookLink}
                onChange={handleChange}
                name="facebookLink"
              ></input>
              <label>
                <GitHubIcon
                  style={{
                    margin: "0 100% 0 0",
                    fontSize: "1.5rem",
                    color: "#24292e"
                  }}
                />
              </label>
              <input
                placeholder="Github Link"
                value={changes.githubLink}
                onChange={handleChange}
                name="githubLink"
              ></input>
              <label>
                <img
                  src={discordLogo}
                  style={{
                    margin: "0 100% 0 0",
                    height: "20px",
                    color: "#24292e"
                  }}
                  alt="discord logo"
                />
              </label>
              <input
                placeholder="Discord Link"
                value={changes.discordLink}
                onChange={handleChange}
                name="discordLink"
              ></input>
              <label>
                <TwitterIcon
                  style={{
                    fontSize: "1.9rem",
                    color: "#00acee",
                    margin: "0 100% 0 0"
                  }}
                />
              </label>
              <input
                placeholder="Twitter Link"
                value={changes.twitterLink}
                onChange={handleChange}
                name="twitterLink"
              ></input>
              <label>
                <LinkedInIcon
                  style={{
                    fontSize: "2rem",
                    color: "#00acee",
                    margin: "0 100% 0 0"
                  }}
                />
              </label>
              <input
                placeholder="linkedIn Link"
                value={changes.linkedInLink}
                onChange={handleChange}
                name="linkedInLink"
              ></input>
              {/* <label
                style={{
                  margin: "4% 100% 1% 0",
                  width: "25%"
                }}
              >
                External Education Links
              </label>
              <input
                placeholder="External Ed Link"
                value={changes.externalEdLink}
                onChange={handleChange}
                name="externalEdLink"
              ></input> */}

              <DidactProfileButton type="submit">Update</DidactProfileButton>
            </form>
          </EditProfileDiv>
        )}
      </div>
    </MyProfileStyleWrapper>
  );
};
export default MyProfile;
