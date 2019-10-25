import React, {useState, useEffect} from 'react'
import Lesson from './Lesson'

const Lessons = ({...props}) => {
    console.log("lesson Props:", props)

    const [filterLesson, setFilterLesson] = useState([]);

    useEffect(() => {
        if(props.lessons) setFilterLesson(props.lessons.filter(l => props.section.id === l.course_sections_id))
    },[props.lessons])

    return(
        <>
            {filterLesson ? filterLesson.map(lesson => <Lesson key={lesson.id} section = {props.section} lesson={lesson} />) : null}
            {/* {props.lessons && props.lessons.filter(lesson => lesson.course_sections_id === props.section.id) ? (<Lesson key={lesson.id} section = {props.section} lesson={props.lesson} />) : null} */}
        </>
    )
}

export default Lessons