import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSectionsByCourseId } from '../../store/actions';
import Section from './Section'




const Sections = ({ props }) => {

    const dispatch = useDispatch()
    const sections = useSelector(state => state.sectionsReducer.sections)
    console.log('state in Sections', sections)
    useEffect(() => {
        dispatch(getSectionsByCourseId(props.props.match.params.id))
    }, [])

   
    
    return (
        <>
            {sections ? sections.map(section =>  (
                <Section key={section.id} section={section} props={props} />
            )) : null}
        </>
    )
}

export default Sections