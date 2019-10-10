import React, {useEffect} from "react";
import { testEndPoint } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

function Dashboard(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        // state.testEndPoint()
    }, []);
    console.log(state.test)
    return (
        <>
        {state.test ? <h2>{state.test.message}</h2> : <h2>Not Connected</h2>}
        </>
    )
};

export default Dashboard;