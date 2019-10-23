import React, { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"

import { DetailedCourseWrapper } from './DetailedCourseStyles'
import { getDetailedCourse } from '../../store/actions/index.js'

const DetailedCourse = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(_ =>
        {
            dispatch(getDetailedCourse(props.id))
        }, [dispatch])

    const detailedCourse = state.coursesReducer.detailedCourse
    const course = detailedCourse.course || {}
    const sections = detailedCourse.sections
    console.log('Detailed Course', detailedCourse)
    console.log('sections', sections)

    useEffect(_ => {

    }, [sections])

    sections && sections.map((el, index) => {
        console.log('Section Map', el.section)
    })

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
                console.log(el)
                return (
                    <div key={index}>
                        <h3>{`Section ${index+1}: ${el.section.name}`}</h3>
                    </div>
                )
            })}
        </DetailedCourseWrapper>
    )
}

export default DetailedCourse