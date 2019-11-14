import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getYourLearningPaths, quitLearningPath, updateYourPathOrder } from '../../store/actions/index'

//Material UI Imports
import Modal from '@material-ui/core/Modal';            
import { makeStyles } from '@material-ui/core/styles';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Styled Component Imports
import { YourLearningPathsWrapper, LearningPathCard, ButtonStyles } from './YourLearningPathsStyles'
import { ButtonDiv, DidactButton } from '../dashboard/ButtonStyles'
import { DroppableDiv, PathInstructions} from "./DraggableStyles.js";

//imports for react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { changePathOrder } from '../../utils/changePathOrder'


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
    const [localState, setLocalState] = useState([])
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
    console.log(props.props.mediumScreenSize)
    const classes = useStyles();
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const learningPaths = state.learningPathReducer.yourLearningPaths

    // console.log(learningPaths)

    useEffect(_ => {
        dispatch(getYourLearningPaths())
    }, [dispatch])

    useEffect(() => {
        if(learningPaths) setLocalState([...learningPaths].sort((a,b) => a.user_path_order - b.user_path_order))
    }, [learningPaths])

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

    // function for Drag and Drop calling changeArr above
    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }
        // // utils import function for updating array order and path order
        setLocalState(changePathOrder(draggableId, destination.index, [...localState]))

        dispatch(updateYourPathOrder(localState))

    };

    return (
      
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span>Learning Paths</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>Overview</span></p>
            </div>
        <PathInstructions>Drag to Change Learning Path Order</PathInstructions>
        <YourLearningPathsWrapper style ={{margin: 'auto'}}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="column-2">
                    {provided => (
                        <DroppableDiv ref={provided.innerRef} {...provided.droppableProps}>
                            <div className='yourLearningPaths'>
                                {
                                    localState.length > 0 && (localState.map((learningPath, index) => {
                                        console.log(learningPath)
                                        return (
                                        <Draggable draggableId={`${index}`} index={index} key={index}>
                                        {(provided, snapshot) => (
                                            <LearningPathCard key={index}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef} 
                                            isDragging={snapshot.isDragging}>
                                                <div className='title'>
                                                    <h1 style={{ fontWeight: 'bold' }}>{learningPath.name}</h1>
                                                    <div>
                                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                                        <button><Link to={`/learning-paths/${learningPath.id}`}>Go To Path</Link></button>
                                                        <div>
                                                            {/* <p>{learningPath.courses.length}</p> */}
                                                            <p></p>
                                                            <p style={{color: 'white', cursor: 'pointer'}} onClick={() => handleModalOpen(learningPath.id)} id={learningPath.id}>Leave Path</p>
                                                        </div>
                                                        </div>
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
                                                                        <DidactButton onClick={handleModalClose}>No</DidactButton>
                                                                        <DidactButton onClick={handleDelete}>Yes</DidactButton>
                                                                    </ButtonDiv>
                                                                </div>
                                                            </Modal>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </LearningPathCard>
                                            )}
                                        </Draggable>
                                        )
                                    }))
                                }
                                {
                                    learningPaths.length === 0 && <h1>You have not joined any learning paths</h1>
                                }
                            </div>
                    {provided.placeholder}
                    </DroppableDiv> )}
                </Droppable>
            </DragDropContext>
            {(!props.props.phoneSize && !props.props.mediumScreenSize) ? 
            (<div className='buttons'>
                <Link style={{ fontSize: '1.4rem' }} to={'/learning-paths/join'}>Join a Learning Path</Link>
                <Link style={{ fontSize: '1.4rem' }} to={'/learning-paths/add'}>Create a New Learning Path</Link>
            </div>) : null}

        </YourLearningPathsWrapper>
        {props.props.mediumScreenSize || props.props.phoneSize ? 
            (<ButtonStyles style={{display: "flex", justifyContent: 'flex-start'}}>   
                <div className = "buttons">
                    <Link style={{ fontSize: '1.4rem' }} to={'/learning-paths/join'}>Join a Learning Path</Link>
                    <Link style={{ fontSize: '1.4rem' }} to={'/learning-paths/add'}>Create a New Learning Path</Link>
                </div>
            </ButtonStyles>) : null}
        </div>
    )
}

export default YourLearningPaths;