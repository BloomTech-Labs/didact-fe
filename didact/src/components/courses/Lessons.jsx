import React, {useState, useEffect} from 'react'
import Lesson from './Lesson'

const Lessons = ({course, section, props, lessons}) => {
    const [filterLesson, setFilterLesson] = useState([]);

    useEffect(() => {
        if(lessons) setFilterLesson(lessons.filter(l => section.id === l.course_sections_id))
    },[lessons, section.id])

    return(
        <>
            {filterLesson ? filterLesson.map(lesson => <Lesson key={lesson.id} course={course} section={section} lesson={lesson} props={props} />) : null}
        </>
    )
}

export default Lessons