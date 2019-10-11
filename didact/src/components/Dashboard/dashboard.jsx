import React, {useEffect} from "react";
import { courseEndPoint } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Course from './courses/Course'

function Dashboard() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(courseEndPoint())
    }, [dispatch]);
    console.log(state.courses)
    return (
        <>
    {state.courses ? state.courses.map(course => <Course key={course.id} course={course} />) : null}
        </>
    )
};

export default Dashboard;   