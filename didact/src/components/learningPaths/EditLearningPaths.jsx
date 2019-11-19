import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLearningPath,
  updateLearningPath,
  deleteLearningPath,
  updateLearningPathContentOrder,
  updateYourPathOrder
} from "../../store/actions";

// import components
import AddToLearningPath from './addToLearningPath/AddToLearningPath'
import DeleteModal from "../courses/DeleteModal";
import CourseLearningPath from "./CourseLearningPath";
import { changePathOrder } from '../../utils/changePathOrder'

// imports for Styled Components 
import { DidactField, DidactInput, DidactLabel, DidactTextArea } from '../dashboard/FormStyles'
import {ButtonDiv, FinishEdit, DidactButton, TrashCanEdit } from "../dashboard/ButtonStyles";
import {DroppableDiv, PathInstructions} from "./DraggableStyles.js";

//imports from material-ui
import { makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

//imports for react-beautiful-dnd
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const useStyles = makeStyles(theme => ({
  // card: {
  //   maxWidth: 540,
  //   borderRadius: 15,
  //   marginTop: "10px",
  //   boxShadow: 'none',
  // },
  card: {
    maxWidth: 540,
    width: "100%",
    margin: '40px 0 40px 0',
    borderRadius: '15px',
    boxShadow: 'none',
    backgroundColor: '#386581',
    color: "white",
    position: 'relative'
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  descriptionDiv: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    fontSize: '1.4rem',
    padding: '0px'
  },
  span: {
    cursor: 'pointer',
    "&:hover":{
      color: 'white'
    }
  },
  dropArrow: {
    position: 'absolute',
    color: "white",
    display: "flex",
    paddingTop: '-10px',
    top: "131px",
    left: "91%"
},
}));



const EditLearningPaths = ({ id, props }) => {
  const state = useSelector(state => state.learningPathReducer);
  const learningPath = state.learningPath;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [learningPathEdit, setLearningPathEdit] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [itemsCourses, setItemsCourses] = useState([]);
  const [changes, setChanges] = useState({
    name: "",
    category: "",
    description: "",
  });
 
  // console.log(learningPath)
  useEffect(() => {
    dispatch(getLearningPath(id));
  }, [id, dispatch]);

  useEffect(() => {
    setChanges({
      name: learningPath.name,
      category: learningPath.category,
      description: learningPath.description,
    });
  }, [learningPath]);

  const toggleEdit = () => {
    setLearningPathEdit(!learningPathEdit);
  };

  const handlePathSubmit = event => {
    event.preventDefault();
    dispatch(updateLearningPath(learningPath.id, changes));
    toggleEdit();
  };

  const handleChange = name => event => {
    setChanges({ ...changes, [name]: event.target.value });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCancel = event => {
    event.preventDefault();
    toggleEdit();
  };

  const backToLearningPath = () => {
    props.history.push(`/learning-paths/${id}`);
  };

   const handleBack = () => {
        props.history.push('/courses')
        
    } 


  const handleDelete = () => {
    dispatch(deleteLearningPath(id, props.history));
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  
  // Combines items and courses into a single array
  useEffect(() => {
    if (learningPath.pathItems) {
      setItemsCourses(
        ([...learningPath.pathItems, ...learningPath.courses].sort(
          (a, b) => a.path_order - b.path_order
        ))
      );
    }
  }, [learningPath.pathItems, learningPath.courses])

  // function for Drag and Drop calling changeArr above
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if(!destination) {
        return
    }
    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return
    }
    // utils import function for updating array order and path order
    setItemsCourses(changePathOrder(draggableId, destination.index, [...itemsCourses]))
  
    dispatch(updateLearningPathContentOrder(itemsCourses, props.match.params.id))

  };
  
  
  if (!state.isLoading) {
    return (
      <>
        {/* <FinishEdit
          onClick={backToLearningPath}
          style={{ fontSize: '1.4rem' }}
        >{`<- BACK TO PATH`}</FinishEdit> */}
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span className={classes.span}  onClick={handleBack}>Learning Paths</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span className={classes.span}  onClick={backToLearningPath}>{learningPath.name && learningPath.name.substring(0, 15)}...</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>Edit</span></p>
        </div>
        <div>
          {learningPathEdit ? (
            <Card className={classes.card} style={{ background: '#386581', color: 'white' }}>
              {/* <CardContent>
                <h2>{learningPath.name}</h2>
                <CardActions className={classes.descriptionDiv} disableSpacing>
                  <p className={classes.descriptionTitle}>
                    {" "}
                    {learningPath.description && !expanded
                      ? (`${learningPath.description.substring(0, 100)} ...`)
                      : null}
                  </p>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ color: 'white'}}
                  >
                    <ExpandMoreIcon style={{ fontSize: '2.6rem' }}/>
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <p>{learningPath.description}</p>
                  </CardContent>
                </Collapse>
                <p color="textSecondary">
                  {learningPath.category
                    ? `Category: ${learningPath.category}`
                    : null}
                </p>
              </CardContent> */}
             <CardContent>
              <CardActions disableSpacing>
                        <div style={{ backgroundColor: '#386581', border: 'none', boxShadow: 'none' }}>
                            <div onClick={handleExpandClick}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ fontSize: '2.8rem', textAlign: 'left', paddingLeft: '6px', transition: `0.25s ease` }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', transition: `0.25s ease` }}>
                                    <h3 style={{ fontFamily: 'ITC Grouch', color: "white" }}>{learningPath.name && learningPath.name.length > 35 ? `${learningPath.name.substring(0, 35)}...` : learningPath.name}</h3>
                                    <div style={{ textAlign: 'left', width: "100%", fontSize: '1.2rem', paddingLeft: "2px", color: "white" }}>
                                   {learningPath.category
                                      ?  <span >Category: {learningPath.category}</span>
                                      : null}
                                        {!expanded ?
                                            (<ExpandMoreIcon className={props && props.match.url === '/' ? classes.dropArrowDashboard : classes.dropArrow} />)
                                            :
                                            (<ExpandLessIcon className={props && props.match.url === '/' ? classes.dropArrowDashboard : classes.dropArrow} />)}
                                        {learningPath.description && learningPath.description !== null ? (
                                            !expanded ? (<div style={{ display: 'flex', alignItems: "baseline", justifyContent: 'space-between', maxHeight: '35px', transition: `max-height 1s ease`, overflow: 'hidden' }}>
                                                {learningPath.description && (<p style={{ paddingRight: '42px' }}>{learningPath.description}</p>)}
                                            </div>) : (<div style={{ display: 'flex', alignItems: "baseline", justifyContent: 'space-between', maxHeight: '1000px', transition: `max-height 1s ease`, overflow: 'visible' }}>
                                                {learningPath.description && (<p style={{ paddingRight: "42px" }}>{learningPath.description}</p>)}
                                            </div>)
                                        ) :
                                            null}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardActions>
              </CardContent>      
              <CardActions>
                <DidactButton onClick={toggleEdit} style={{ margin: "0 20px 15px 70%", width: "100%"}} type="submit">Edit Description</DidactButton>
              </CardActions>
            </Card>
          ) : (
            <Card className={classes.card}>
              <CardContent>
                <p className={classes.title} gutterBottom>
                  Learning Path Overview
                </p>
                <TrashCanEdit style={{fontSize: '2.6rem'}} onClick={handleModalOpen}></TrashCanEdit>
                {openModal ? (
                  <DeleteModal
                    handleDelete={handleDelete}
                    text={"Learning Path"}
                    open={openModal}
                    handleModalClose={handleModalClose}
                  />
                ) : null}
                <form onSubmit={handlePathSubmit} className={classes.container} noValidate autoComplete="off">
                <DidactField>
                  <DidactLabel for='title'>Learning Path Title</DidactLabel>
                  <DidactInput id='title' type='text' value={changes.name || ""} onChange={handleChange('name')} placeholder='Learning Path Title' />  
                </DidactField>
                <DidactField>
                  <DidactLabel for='description'>Description</DidactLabel>
                  <DidactTextArea rows="8" id='description' value={changes.description || ""} onChange={handleChange('description')} placeholder='Description' />  
                </DidactField>
                <DidactField>
                  <DidactLabel for='category'>Category</DidactLabel>
                  <DidactInput id='category' type='text' value={changes.category || ""} onChange={handleChange('category')} placeholder='Category' />  
                </DidactField>
                  <ButtonDiv>
                    <DidactButton style={{ marginLeft: "10px" }} onClick={handleCancel}>Cancel</DidactButton>
                    <DidactButton type="submit" style={{ marginRight: "4%" }}>Submit Edit</DidactButton>
                  </ButtonDiv>
                </form>
              </CardContent>
            </Card>
          )}
          <AddToLearningPath props = {props} itemsCourses = {itemsCourses}/>

          <PathInstructions>Drag to Change Learning Path Order</PathInstructions>
          <DragDropContext onDragEnd={onDragEnd}>
            {<div>
              <Droppable droppableId="column-1">
                {provided => (
                 <DroppableDiv
                    ref={provided.innerRef}
                    // innerRef={provided.innerRef}
                    {...provided.droppableProps}
                 >
                    {itemsCourses &&  
                    itemsCourses.map((order, index) => <CourseLearningPath props = {props} key={index} course={order} index = {index}/>)}
                    {provided.placeholder}
                  </DroppableDiv>  
                  )
                  
                }
              </Droppable>
            </div>}
          </DragDropContext>

        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default EditLearningPaths;
