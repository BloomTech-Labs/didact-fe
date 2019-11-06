import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ButtonDiv, EditLessonButton } from '../dashboard/ButtonStyles'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const DeleteModal = ({handleDelete, text, open, handleModalClose}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleModalClose}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 style={{textAlign: 'center'}} id="simple-modal-title">Delete {text}?</h2>
                <ButtonDiv>
                <EditLessonButton onClick={handleModalClose}>no</EditLessonButton>
                <EditLessonButton onClick={handleDelete}>yes</EditLessonButton>
                </ButtonDiv>
                {/* <SimpleModal /> */}
            </div>
      </Modal>)
}

export default DeleteModal