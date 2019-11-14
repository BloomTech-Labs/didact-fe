import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { findForUserId, getLearningPath } from '../../store/actions/index.js'
import { Link } from "react-router-dom";

import { LearningPathWrapper } from './LearningPathStyles'

const LearningPath = ({ id }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const learningPath = state.learningPathReducer.learningPath;
    const learningPathCompletion = state.learningPathReducer.learningPathCompletion;
    const [completionItemsCourses, setCompletionItemsCourses] = useState([])

    useEffect(_ => {
        dispatch(getLearningPath(id))
        dispatch(findForUserId(id))
    }, [dispatch, id])

    useEffect(() => {
        if (learningPathCompletion.pathItems) {
            setCompletionItemsCourses(
                ([...learningPathCompletion.pathItems, ...learningPathCompletion.courses].sort(
                    (a, b) => a.path_order - b.path_order
                ))
            );
        }
    }, [learningPathCompletion.pathItems, learningPathCompletion.courses])

    const notCompletedItemsCourses = []
    const completedItemsCourses = []

    completionItemsCourses.forEach((el, index) => {
        if(el.automatically_completed || el.manually_completed) {
            completedItemsCourses.push(el)
        } else {
            notCompletedItemsCourses.push(el)
        }
    })

    const firstItemCourse = notCompletedItemsCourses[0]
    const upcomingItemsCourses = []

    notCompletedItemsCourses.forEach((el, index) => {
        if(!(index === 0)) {
            upcomingItemsCourses.push(el)
        }
    })
    const progress = firstItemCourse && ((firstItemCourse.completed / firstItemCourse.total) * 100).toString()
    const progressPecentage = progress && Number(progress.substring(0, 4))
   

    console.log(completionItemsCourses)
    console.log('leanring apth', learningPath)
    console.log('completion', learningPathCompletion)
    

    return (
        <LearningPathWrapper>
            <div className='breadcrumb'>
                <div className='breadcrumbTitle'>
                    <p>{`Learning Paths > ${learningPathCompletion.name}`}</p>
                    <Link to='/learning-paths'>{`< Back to Paths`}</Link>
                </div>
                <span></span>
            </div>
            {firstItemCourse && <div className={'learningPathCourseWrappers current' + (firstItemCourse.path_id ? ' item' : '' + ((upcomingItemsCourses.length % 3 !== 0) || (upcomingItemsCourses.length === 1) ? ' long' : ''))}>
                <div className='currentTitle'>
                    <h3>Current</h3>
                    {
                        (learningPathCompletion.creatorId === state.onboardingReducer.user.id) &&
                        <div className='editLearningButton'>
                            <Link to={`/learning-paths/${id}/edit`}>Edit</Link>
                        </div>
                    }
                </div>
                <div className='learningPathCard'>
                    <h2>{firstItemCourse.name}</h2>
                    {!firstItemCourse.path_id ?
                        (<div style={{display:'flex', justifyContent: 'space-between', width: '80%'}}>
                            <div style={{display:'flex', flexDirection:'column', textAlign: "left"}}>
                            <span>Progress</span>
                            <span>{`${(firstItemCourse) ? (progressPecentage) : 0} %`}</span>
                            </div> 
                        </div>): null} 
                    <p>{firstItemCourse.description}</p>
                    <div className='goToCourse'>
                        <h4>Udemy</h4>
                        {firstItemCourse.path_id ? <a href={firstItemCourse.link}>Go To {firstItemCourse.type.charAt(0).toUpperCase() + firstItemCourse.type.slice(1)}</a> : <a href={`/courses/${firstItemCourse.id}`}>Go To Course</a>}
                    </div>
                </div>
            </div>}
            <div className='learningPathCards'>
                <h3>Upcoming</h3>
                <div className='upcomingCards'>    
                    {
                        upcomingItemsCourses.map((itemCourse, index) => {
                            return (
                                <div key={index} className={((upcomingItemsCourses.length % 3 === 0) || (upcomingItemsCourses.length === 1) ? 'long' : '')}>
                                    <div className={'learningPathCourseWrappers upcoming' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                        <div className='learningPathCard'>
                                            <div>
                                                <h2>{itemCourse.name}</h2>
                                                {!itemCourse.path_id ? 
                                                (<div style={{display:'flex', justifyContent: 'space-between', width: '80%'}}>
                                                    <div style={{display:'flex', flexDirection:'column', textAlign: "left"}}>
                                                    <span>Progress</span>
                                                    <span>{`${(itemCourse) ? (((itemCourse.completed / itemCourse.total) * 100).toString().substring(0, 4)) : 0} %`}</span>
                                                    </div> 
                                                </div>) : null}
                                                <p>{itemCourse.description}</p>
                                            </div>
                                            <div className='goToCourse'>
                                                <h4>Udemy</h4>
                                                {itemCourse.path_id ? <a href={itemCourse.link}>Go To {itemCourse.type.charAt(0).toUpperCase() + itemCourse.type.slice(1)}</a> : <a href={`/courses/${itemCourse.id}`}>Go To Course</a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h3>Completed</h3>
                <div className='completedCards'>
                    {
                        completedItemsCourses.map((itemCourse, index) => {
                            console.log(completedItemsCourses.length % 3)
                            return (
                                <div key={index} className={((completedItemsCourses.length % 3 === 0) || (completedItemsCourses.length === 1) ? ' long' : '')}>
                                    <div className={'learningPathCourseWrappers' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                        <div className='learningPathCard completed'>
                                            <div>
                                                <h2>{itemCourse.name}</h2>
                                                <div style={{display:'flex', justifyContent: 'space-between', width: '80%'}}>
                                                    <div style={{display:'flex', flexDirection:'column', textAlign: "left"}}>
                                                    <span>Progress</span>
                                                    <span>{`100%`}</span>
                                                    </div> 
                                                </div>
                                                <p>{itemCourse.description}</p>
                                            </div>
                                            <div className='goToCourse'>
                                                <h4>Udemy</h4>
                                                {itemCourse.path_id ? <a href={itemCourse.link}>Go To {itemCourse.type.charAt(0).toUpperCase() + itemCourse.type.slice(1)}</a> : <a href={`/courses/${itemCourse.id}`}>Go To Course</a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </LearningPathWrapper>
    )
}

export default LearningPath