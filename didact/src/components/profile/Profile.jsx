import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Popover from '@material-ui/core/Popover';

import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Redirect} from "react-router-dom";
import {useSelector } from "react-redux";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const useStyles = makeStyles(theme => ({
  buttons: {
    border: "none",
    backgroundColor: "white",
    outline: "none",
    cursor: 'pointer'
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "-10px",
    backgroundColor: 'white'
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100%)",
    backgroundColor: 'white'
  },
  closeModel: {
    margin: "-25px 0 0 210px",
    color: 'gray',
    cursor: "pointer",
    backgroundColor: 'white',
    outline: "none",
    
  },
  description: {
    marginTop: '-20px',
    marginBottom: '40px',
    color: "gray"
  },
  iconImage: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    outline: "none",
    cursor: 'pointer',
    border: 'none',
    objectFit: 'cover'
  },
  iconImageProfile: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginTop: '-20px',
    objectFit: 'cover'
  },
  
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.background.paper,
    // borderRadius: 15,
    boxShadow: theme.shadows[5],
    padding: "30px",
    height: "400px",
    width: "250px",
    outline: "none",
  },
  paragraph: {
    color: "gray",
  },
  smallImageDivs: {
    display: "flex",
    flexDirection: "row",
  },
  smallImage: {
    width: "35px",
    height: "35px",
    backgroundColor: "#ebe8e1",
    borderRadius: "50%",
    margin: "0 10px",
  },
  root: {
    outline: "none",
    border: 'none',
    
  },
  title: {
    marginTop: '0',
    fontSize: "14px"
  },
}));

// const CssPopover = withStyles({
//   root: {
//     '& .MuiPopover-root': {
//       borderRadius: 15,
//   },
//   },
// })(Popover);

export default function Profile(props) {
  console.log(props)
  const classes = useStyles();
  const phoneSize = useMediaQuery("(max-width:770px)");
  const userName = useSelector(state => state.onboardingReducer.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const firstName = userName.first_name ? userName.first_name.substring(0, 1).toUpperCase() + userName.first_name.substring(1) : null;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
        localStorage.clear('token')
        props.props.history.push('/login')
  }

  const handleMobileLogOut = () => {
    localStorage.clear('token')
    props.props.props.history.push('/login')
}
 
  const content = () => {
    return (
      <div className = {classes.root} >
        <div className={classes.paper}>
          <div className = {classes.closeModel} onClick = {handleClose}>X</div>
          
          {userName.photo ? <img src={userName.photo} alt = "Profile" className={classes.iconImageProfile} /> : <PermIdentityIcon  className={classes.iconImageProfile} />}
          <h2 className={classes.title} id="transition-modal-title">{userName.email}</h2>
          <p className={classes.description} id="transition-modal-description">Welcome {firstName}!</p>
          <div className={classes.smallImageDivs} >
            {/* <div className={classes.smallImage} ></div>
            <div className={classes.smallImage} ></div>
            <div className={classes.smallImage} ></div> */}
          </div>
          <div className={classes.buttonsDiv}>
            <button className={classes.buttons}>
              <div className={classes.buttonDiv}>
                {/* <p>Settings</p>
                <p className = {classes.paragraph}>></p> */}
              </div>
            </button>
            <button className={classes.buttons}>
              <div className={classes.buttonDiv}>
                {/* <p>Contact Us</p>
                <p className = {classes.paragraph} >></p> */}
              </div>
            </button>
            <button className={classes.buttons} onClick = {!phoneSize ? (handleLogOut) : (handleMobileLogOut)}>
              <div className={classes.buttonDiv}>
                <p>Log Out</p>
                <p className = {classes.paragraph} >></p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return ( 
    <div className = {classes.root} >
      {userName.photo ? <img src={userName.photo} alt = "Profile" onClick={handleClick} className={classes.iconImage} /> : <PermIdentityIcon onClick={handleClick} className={classes.iconImage} />}
       <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        {content()}
      </Popover>
    </div>
  );
}
