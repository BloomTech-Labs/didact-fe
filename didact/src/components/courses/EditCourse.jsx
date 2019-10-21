import React from 'react';
import { useSelector } from 'react-redux';

const EditCourse = (props) => {
    const state = useSelector(state => state)
    console.log(state)
    console.log('props in edit course', props)
    return (
        <div>Edit Course</div>
    )
}

export default EditCourse;