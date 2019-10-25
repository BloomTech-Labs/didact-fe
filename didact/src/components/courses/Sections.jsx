import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSectionsByCourseId } from '../../store/actions';
import Section from './Section'




const Sections = ({ props }) => {

    const dispatch = useDispatch()
    const sections = useSelector(state => state.sectionsReducer.sections)
    useEffect(() => {
        dispatch(getSectionsByCourseId(props.props.match.params.id))
    }, [])

    // useEffect(() => {
    //     dispatch(getLessonsBySectionId(props.props.match.params.id, section.id))
    // }, [])

    // const filterLesson = props.lesson.filter(l => props.section.id === l.course_sections_id)
    
    return (
        <>
            {sections ? sections.map(section =>  (
                <Section key={section.id} section={section} props={props} />
            )) : null}
        </>
    )
}

export default Sections