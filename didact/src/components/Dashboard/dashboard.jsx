import React, {useEffect} from "react";
import { courseEndPoint } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Course from './courses/Course'

function Dashboard(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(courseEndPoint())
    }, []);
    console.log(state.courses)
    return (
        <>
    {state.courses ? state.courses.map(course => <Course course={course} />) : null}
        </>
    )
};

export default Dashboard;