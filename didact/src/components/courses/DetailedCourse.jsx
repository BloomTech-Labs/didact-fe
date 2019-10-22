import React, { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { getSectionsByCourseId, getDetailedCourse } from '../../store/actions/index.js'

const DetailedCourse = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(_ =>
        {
            dispatch(getSectionsByCourseId(props.id))
            dispatch(getDetailedCourse(props.id))
        }, [dispatch])

    return (
        <>
            {state.sectionsReducer.sections && state.sectionsReducer.sections.map((el, index) => 
            {
                return (
                    <div key={index}>
                        {el.name}
                    </div>
                )
            })}
        </>
    )
}

export default DetailedCourse