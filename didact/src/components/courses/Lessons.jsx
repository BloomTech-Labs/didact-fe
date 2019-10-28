import React, {useState, useEffect} from 'react'
import Lesson from './Lesson'

const Lessons = ({section, props, lessons}) => {
    console.log('props in lesson array: ', props)

    const [filterLesson, setFilterLesson] = useState([]);

    useEffect(() => {
        if(lessons) setFilterLesson(lessons.filter(l => section.id === l.course_sections_id))
    },[lessons, section.id])

    return(
        <>
            {filterLesson ? filterLesson.map(lesson => <Lesson key={lesson.id} section = {props.section} lesson={lesson} props={props} />) : null}
            {/* {props.lessons && props.lessons.filter(lesson => lesson.course_sections_id === props.section.id) ? (<Lesson key={lesson.id} section = {props.section} lesson={props.lesson} />) : null} */}
        </>
    )
}

export default Lessons