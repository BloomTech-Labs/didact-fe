import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseById, getSectionsByCourseId, editCourse  } from '../../store/actions'
import {CoursesCard, CourseMenuDiv, CourseDiv } from '../dashboard/DashboardStyles';
import Tags from './Tags'

const EditCourse = (props) => {
    const course = useSelector(state => state.coursesReducer.course)
    const dispatch = useDispatch()
    const values = {...course}
    const [courseEdit, setCourseEdit] = useState(false)
    const [changes, setChanges] = useState({
       
        name: "",
        description: "",
        foreign_instructors: "",
        foreign_rating: "",
        link: ""
    })
    
    // console.log("course", state.coursesReducer.course)
    // console.log('state', state)
    console.log('props in edit course', props)
    console.log("changes: ", changes)

    useEffect(() => {
        dispatch(getCourseById(props.id))
        // dispatch(getSectionsByCourseId(props.id))
    }, [props.id, dispatch])
   
    useEffect(() => {
        setChanges({
            ...changes,
            name: course.name,
            description: course.description,
            foreign_instructors: course.foreign_instructors,
            foreign_rating: course.foreign_rating,
            link: course.link
        })
    }, [course])


    const toggleEdit = () => {
        setCourseEdit(!courseEdit)
    }

    const handleCourseSubmit = event => {
        event.preventDefault()
        dispatch(editCourse(course.id, changes))
        toggleEdit()
    }

    const handleChange = event => {
        setChanges({ ...changes, [event.target.name]: event.target.value });
      };
  
    // console.log("sections", state.sectionsReducer.sections)
    return (
        <div>
        {courseEdit ? 
        (
        <CoursesCard>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>{course.foreign_instructors}</p>
            <p>{course.foreign_rating}</p>
            <p>{course.link}</p>
            <button onClick = {toggleEdit}>Edit Course</button>
        </CoursesCard>
      ) : (
        <CoursesCard>
            <form onSubmit = {handleCourseSubmit}>
                <input name='name' type="text" placeholder="name" value={changes.name} onChange = {handleChange} />
                <textarea name ='description' placeholder="description" value = {changes.description} onChange = {handleChange} />
                <input name = 'foreign_instructors' type="text" placeholder="foreign_instructors" value = {changes.foreign_instructors} onChange = {handleChange} />
                <input name = 'foreign_rating' type="text" placeholder="foreign_rating" value = {changes.foreign_rating} onChange = {handleChange} />
                <input name = 'link' type="text" placeholder="link" value = {changes.link} onChange = {handleChange} />
                <button>Submit Edit</button>
            </form>
        </CoursesCard>
        )
        }
        <Tags course = {course}/>
        </div>
    )
}

export default EditCourse;