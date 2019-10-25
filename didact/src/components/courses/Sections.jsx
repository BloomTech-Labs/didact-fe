import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSectionsByCourseId } from '../../store/actions';
import Section from './Section'




const Sections = ({ course, props }) => {

    const dispatch = useDispatch()
    let state = useSelector(state => state.sectionsReducer)
    let sections = state.sections
    let displaySections = sections.sort((a,b) => a.order - b.order)
    console.log(sections)
    useEffect(() => {
        dispatch(getSectionsByCourseId(props.match.params.id))
    }, [dispatch, props.match.params.id])

    
    
    return (
        <>
            {sections ? displaySections.map(section =>  (
                <Section key={section.id} section={section} props={props}/>
            )) : null}
        </>
    )
}

export default Sections