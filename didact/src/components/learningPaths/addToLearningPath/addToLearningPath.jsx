import React from "react";

import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Link } from 'react-router-dom';
import { Container, IconDiv } from './AddStyles.js';


export default function AddToLearningPath({props, itemsCourses}) {

    return (
        <Container>
            <Link to={`/courses`} style={{textDecoration: 'none', color: '#5b5b5b'}}>
            <IconDiv>
                <AddToQueueIcon style={{fontSize: "48px"}}/>
                <p style={{fontSize: "12px"}} >Add Existing Course</p>
            </IconDiv>
            </Link>
            
            <Link to={`/learning-paths/${props.match.params.id}/courses/add/${itemsCourses.length}`} style={{textDecoration: 'none', color: '#5b5b5b'}} >
            <IconDiv>
                <NoteAddIcon style={{fontSize: "48px"}}/>
                <p style={{fontSize: "12px"}}>Create New Course</p>
            </IconDiv>
            </Link>

            <Link to={`/learning-paths/${props.match.params.id}/items/add`} style={{textDecoration: 'none', color: '#5b5b5b'}}>
            <IconDiv>
                <PostAddIcon style={{fontSize: "48px"}}/>
                <p style={{fontSize: "12px"}}>Add New Item</p>
            </IconDiv>
            </Link>
        </Container> 
    )
} 