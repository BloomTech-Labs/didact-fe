import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";

import { getYourLearningPaths, quitLearningPath } from '../../store/actions/index'

import { YourLearningPathsWrapper, LearningPathCard } from './YourLearningPathsStyles'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonDiv, EditLessonButton } from '../dashboard/ButtonStyles'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const YourLearningPaths = (props) => {

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

    const classes = useStyles();
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(_ => {
        dispatch(getYourLearningPaths())
    }, [dispatch])

    const learningPaths = state.learningPathReducer.yourLearningPaths
    const [openModal, setOpenModal] = useState(false);
    const [currentId, setCurrentId] = useState(null)
    const [modalStyle] = useState(getModalStyle);

    const handleDelete = () => {
        dispatch(quitLearningPath(currentId));
        setOpenModal(false);
    };

    const handleModalOpen = id => {
        setCurrentId(id)
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <YourLearningPathsWrapper>
            <div className='yourLearningPaths'>
                {
                    learningPaths.length > 0 && (learningPaths.map((learningPath, index) => {
                        return (
                            <LearningPathCard key={index}>
                                <div className='title'>
                                    <h1>{learningPath.name}</h1>
                                    <div>
                                        <button><Link to={`/learning-paths/${learningPath.id}`}>Go To Path</Link></button>
                                        <button onClick={() => handleModalOpen(learningPath.id)} id={learningPath.id}>Leave Path</button>
                                        {openModal ? (
                                            <Modal
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                                open={openModal}
                                                onClose={handleModalClose}
                                            >
                                                <div style={modalStyle} className={classes.paper}>
                                                    <h2 style={{ textAlign: 'center' }} id="simple-modal-title">Are you sure you want to leave this Learning Path?</h2>
                                                    <ButtonDiv>
                                                        <EditLessonButton onClick={handleModalClose}>No</EditLessonButton>
                                                        <EditLessonButton onClick={handleDelete}>Yes</EditLessonButton>
                                                    </ButtonDiv>
                                                </div>
                                            </Modal>
                                        ) : null}
                                    </div>
                                </div>
                            </LearningPathCard>
                        )
                    }))
                }
                {
                    learningPaths.length === 0 && <h1>You have not joined any learning paths</h1>
                }
            </div>
            <div className='buttons'>
                <Link to={'/learning-paths/join'}>Join a Learning Path</Link>
                <Link to={'/learning-paths/add'}>Create a New Learning Path</Link>
            </div>
        </YourLearningPathsWrapper>
    )
}

export default YourLearningPaths;