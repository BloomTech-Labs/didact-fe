import React from 'react';


const Course = ({course}) => {
    return (
        <div>
            <h2>{course.name}</h2>
            <p>By {course.foreign_instructors}</p>
            <a href={course.link}>{course.link}</a>
            <p>{course.foreign_rating}</p>
            {course.category ? <p>{course.category}</p> : <p>No Category Listed</p>}
        </div>
    )
}

export default Course;