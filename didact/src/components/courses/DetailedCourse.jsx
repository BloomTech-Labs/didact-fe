import React, { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { getSectionsByCourseId } from '../../store/actions/index.js'

const DetailedCourse = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(_ =>
        {
            dispatch(getSectionsByCourseId(props.id))
        }, [dispatch])

    console.log(props.id)
    console.log('sections', state.sectionsReducer)
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