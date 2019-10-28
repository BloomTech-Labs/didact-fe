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
            {filterLesson ? filterLesson.map(lesson => <Lesson key={lesson.id} section={section} lesson={lesson} props={props} />) : null}
        </>
    )
}

export default Lessons