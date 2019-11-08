import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";

import { DetailedCourseWrapper } from './DetailedCourseStyles'
import { DidactButton, TagStyles } from '../dashboard/ButtonStyles'

import { getDetailedCourse } from '../../store/actions/index.js'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DetailedCourse = (props) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const phoneSize = props.props.phoneSize;
    const id = state.onboardingReducer.user.id

    useEffect(_ => {
        dispatch(getDetailedCourse(props.id))
    }, [dispatch, props.id])

    const detailedCourse = state.coursesReducer.detailedCourse
    const course = detailedCourse.course
    const sections = detailedCourse.sections
    const [expanded, setExpanded] = useState(false)
    const [lessonExpanded, setLessonExpanded] = useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setLessonExpanded(isExpanded ? panel : false)
    };

    const handleLessonExpansion = panel => (event, isExpanded) => {
        setLessonExpanded(isExpanded ? panel : false)
    }

    if (!state.coursesReducer.isLoading && (course && sections)) {
        return (
                <DetailedCourseWrapper>
                    <div className="courseWrapper">
                        <h1>{course.name}</h1>
                        <p>{course.description}</p>
                        <p>{course.category ? (`Category: ${course.category}`) : (null)}</p>
                        <div className="courseFooter">
                            <div className="tags">
                                {course.tags && course.tags.map((tag, index) => {
                                    return (
                                        <TagStyles key={index} className="tag">{tag}</TagStyles>
                                    )
                                })}
                            </div>
                            <DidactButton className="buttons" >
                                {id === course.creator_id && <Link style={{ textDecoration: 'none', color: "black" }} to={`/courses/${course.id}/edit`}>Edit Course</Link>}
                            </DidactButton>
                        </div>
                    </div>
                    {sections.map((el, index) => {
                        const videoLength = el.details.filter(detail => detail.type === 'video').length
                        const readingLength = el.details.filter(detail => detail.type === 'reading').length
                        const quizLength = el.details.filter(detail => detail.type === 'quiz').length
                        const assignmentLength = el.details.filter(detail => detail.type === 'assignment').length
                        return (
                            <ExpansionPanel key={index} className="expansionPanel" expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon className="expandIcon" />}
                                    aria-controls={`panel${index}bh-content`}
                                    id={`panel${index}bh-header`}
                                    className="expansionPanelSummary"
                                >
                                    <h3>{`Section ${index + 1}: ${el.section.name}`}</h3>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div style = {{width: '100%'}}>
                                        <p>{el.section.description}</p>
                                        <ExpansionPanel className="lessonExpansionPanel" expanded={lessonExpanded === `lessonPanel${index}`} onChange={handleLessonExpansion(`lessonPanel${index}`)}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon className="expandIcon" />}
                                                aria-controls={`lessonPanel${index}bh-content`}
                                                id={`lessonPanel${index}bh-header`}
                                                className="expansionPanelSummary"
                                            >
                                                {!phoneSize ? (
                                                <div className="lessonExpansionSummary">
                                                    <h3 style = {{textAlign: 'center'}}>Lessons</h3>
                                                    {(videoLength > 0) && <h3>{`${videoLength} Videos`}</h3>}
                                                    {(readingLength > 0) && <h3>{`${readingLength} Readings`}</h3>}
                                                    {(quizLength > 0) && <h3>{`${quizLength} Quizzes`}</h3>}
                                                    {(assignmentLength > 0) && <h3>{`${assignmentLength} Assignments`}</h3>}
                                                </div>
                                                ) : (
                                                <div className="lessonExpansionSummary" style = {{display:'flex', flexDirection: 'column'}}>
                                                    <div>
                                                        <h3 style = {{textAlign: 'center'}}>Lessons</h3>
                                                    </div>
                                                    <div style = {{display:'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly'}}>
                                                        {(videoLength > 0) && <h3 style = {{padding: '0 5px'}}>{`${videoLength} Videos`}</h3>}
                                                        {(readingLength > 0) && <h3 style = {{padding: '0 5px'}}>{`${readingLength} Readings`}</h3>}
                                                        {(quizLength > 0) && <h3 style = {{padding: '0 5px'}}>{`${quizLength} Quizzes`}</h3>}
                                                        {(assignmentLength > 0) && <h3 style = {{padding: '0 5px'}}>{`${assignmentLength} Assignments`}</h3>}
                                                    </div>
                                                </div>
                                                )}
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <div>
                                                    {
                                                        el.details.map((detail, i) => {
                                                            return (
                                                                <div key={i} className="lessonTitle">
                                                                    <a className="lessonTitleName" href={detail.link} target="_blank" rel="noopener noreferrer">{detail.name}</a>
                                                                    <p className="lessonTitleType">{detail.type}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                    })}
                </DetailedCourseWrapper>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default DetailedCourse