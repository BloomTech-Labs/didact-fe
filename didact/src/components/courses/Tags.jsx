import React, {useState} from 'react'
import { getCourseById, getSectionsByCourseId, editCourse  } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import {CoursesCard, CourseMenuDiv, CourseDiv } from '../dashboard/DashboardStyles';

const Tags = ({course}) => {
    const dispatch = useDispatch()
    const [openForm, setOpenForm] = useState(false)
    const [tag, setTag] = useState({
        name: ''
    });

    const handleClick = () => {
        setOpenForm(!openForm)
    }

    const handleSubmit = ()

    return (
        <>
         <CoursesCard>
            {course.tags ? course.tags.map(tag => {
              return(<p>{tag}</p>)  
            }) : null}
            <button onClick = {handleClick}>Add Tag</button>
            {openForm ? (
                <form onSubmit>
                    <input name="name" type="text" placeholder="Add Tag" />
                    <button>Submit Tag</button>
                </form>
            ) : null}
        </CoursesCard>
        </>
    )
}

export default Tags;