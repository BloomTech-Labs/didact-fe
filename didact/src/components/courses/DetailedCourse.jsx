import React, { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { getSectionsByCourseId, getCourseById } from '../../store/actions/index.js'

import { DetailedCourseWrapper } from './DetailedCourseStyles'

const DetailedCourse = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(_ =>
        {
            dispatch(getSectionsByCourseId(props.id))
        }, [dispatch])
        
    useEffect(_ => 
        {
        dispatch(getCourseById(props.id))
        }, [dispatch])

    const course = state.coursesReducer.courses
    const sections = state.sectionsReducer.sections

    console.log(course.tags)
    console.log(sections)
    return (
        <DetailedCourseWrapper>
            <div>
                <h1>{course.name}</h1>
                <p>{course.description}</p>
                {course.tags && course.tags.map((tag, index) =>{
                    return (
                        <span key={index} className="tag">{tag}</span>
                    )
                })

                }
            </div>
            {sections && sections.map((el, index) => 
            {
                console.log(index)
                return (
                    <div key={index}>
                        <h3>{`Lesson ${index+1}: ${el.name}`}</h3>
                    </div>
                )
            })}
        </DetailedCourseWrapper>
    )
}

export default DetailedCourse