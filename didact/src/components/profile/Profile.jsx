import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Redirect} from "react-router-dom";
import {useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  buttons: {
    border: "none",
    backgroundColor: "white",
    outline: 0,
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
    margin: "-40px 0 0 210px",
    color: 'gray',
    cursor: "pointer",
    backgroundColor: 'white'
    
  },
  description: {
    marginTop: '-30px',
    marginBottom: '40px',
    color: "gray"
  },
  iconImage: {
    width: "35px",
    height: "35px",
    backgroundColor: "#ebe8e1",
    borderRadius: "50%",
    outline: 0,
    cursor: 'pointer',
    border: 'none'
  },
  iconImageProfile: {
    width: "75px",
    height: "75px",
    backgroundColor: "#ebe8e1",
    borderRadius: "50%",
    marginTop: '-20px',
  },
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginRight: "35px",
    marginTop: "23px",
  },
  modalMobile: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginRight: "30px",
    marginTop: "10px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 15,
    boxShadow: theme.shadows[5],
    padding: "30px",
    height: "400px",
    width: "250px",
    outline: 0,
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
  title: {
    marginTop: '0',
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const phoneSize = useMediaQuery("(max-width:770px)");
  const [open, setOpen] = React.useState(false);
  const userName = useSelector(state => state.onboardingReducer.user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
        localStorage.clear('token')
        props.props.history.push('/login')
  }

  const content = () => {
    return (
      <Fade in={open}>
        <div className={classes.paper}>
          <div className = {classes.closeModel} onClick = {handleClose}>X</div>
          <div className={classes.iconImageProfile}></div>
          <h2 className={classes.title} id="transition-modal-title">{userName.email}</h2>
          <p className={classes.description} id="transition-modal-description">Something Else?</p>
          <div className={classes.smallImageDivs} >
            <div className={classes.smallImage} ></div>
            <div className={classes.smallImage} ></div>
            <div className={classes.smallImage} ></div>
          </div>
          <div className={classes.buttonsDiv}>
            <button className={classes.buttons}>
              <div className={classes.buttonDiv}>
                <p>Settings</p>
                <p className = {classes.paragraph}>></p>
              </div>
            </button>
            <button className={classes.buttons}>
              <div className={classes.buttonDiv}>
                <p>Contact Us</p>
                <p className = {classes.paragraph} >></p>
              </div>
            </button>
            <button className={classes.buttons} onClick = {handleLogOut}>
              <div className={classes.buttonDiv}>
                <p>Log Out</p>
                <p className = {classes.paragraph} >></p>
              </div>
            </button>
          </div>
        </div>
      </Fade>
    );
  };

  return (
    <div>
      <button onClick={handleOpen} className={classes.iconImage}></button>
      {!phoneSize ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          {content()}
        </Modal>
      ) : (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modalMobile}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          {content()}
        </Modal>
      )}
    </div>
  );
}
