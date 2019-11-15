import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { findForUserId, getLearningPath, toggleCompleteCourse, toggleLearningPath, toggleLearningPathItem } from '../../store/actions/index.js'
import { Link } from "react-router-dom";

import { LearningPathWrapper } from './LearningPathStyles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Loader from "react-loader-spinner";

const LearningPath = ({ id }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const learningPath = state.learningPathReducer.learningPath;
    const learningPathCompletion = state.learningPathReducer.learningPathCompletion;
    const [completionItemsCourses, setCompletionItemsCourses] = useState([])
    const isLoadingIcon = state.coursesReducer.isLoadingIcon
    const isLoadingCourseToggle = state.coursesReducer.isLoading
    const isLoadingLearningPathToggle = state.learningPathReducer.isLoading

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
        if (el.automatically_completed || el.manually_completed) {
            completedItemsCourses.push(el)
        } else {
            notCompletedItemsCourses.push(el)
        }
    })

    const firstItemCourse = notCompletedItemsCourses[0]
    const upcomingItemsCourses = []

    notCompletedItemsCourses.forEach((el, index) => {
        if (!(index === 0)) {
            upcomingItemsCourses.push(el)
        }
    })

    const handleMarkCompleteCourse = (courseId) => {
        
        dispatch(toggleCompleteCourse(courseId))
        console.log('Course Toggle')
        setTimeout(function(){
            if((!isLoadingCourseToggle) || (state.learningPathReducer.learningPathCompletion === learningPathCompletion)) {
                dispatch(findForUserId(id))
            }
        }, 100)
    }

    const handleMarkCompleteItem = (itemId) => {
        dispatch(toggleLearningPathItem(id, itemId))
        console.log('Item Toggle')
        setTimeout(function(){
            if((!isLoadingLearningPathToggle) || (state.learningPathReducer.learningPathCompletion === learningPathCompletion)) {
                dispatch(findForUserId(id))
            }
        }, 100)
    }


    return (
        <LearningPathWrapper>
            <div className='breadcrumb'>
                <div className='breadcrumbTitle'>
                    <p>{`Learning Paths > ${learningPathCompletion.name}`}</p>
                    <Link to='/learning-paths'>{`< Back to Paths`}</Link>
                </div>
                <span></span>
            </div>
            {firstItemCourse && <div className={'learningPathCourseWrappers current' + (firstItemCourse.path_id ? ' item' : '' + ((upcomingItemsCourses.length % 2 !== 0) || (upcomingItemsCourses.length === 1) ? ' long' : ''))}>
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
                    <div className='currentTitle'>
                        <h2>{firstItemCourse.name}</h2>
                        {firstItemCourse.path_id && 
                                    (firstItemCourse.automatically_completed || firstItemCourse.manually_completed ?
                                        <CheckCircleIcon onClick={() => handleMarkCompleteItem(firstItemCourse.id)} className='completeButton' />
                                        :
                                        <CheckCircleIcon onClick={() => handleMarkCompleteItem(firstItemCourse.id)} className='notCompleteButton' />)
                        }
                        {!firstItemCourse.path_id &&
                                (firstItemCourse.automatically_completed || firstItemCourse.manually_completed ?
                                    <CheckCircleIcon onClick={() => handleMarkCompleteCourse(firstItemCourse.id)} className='completeButton' />
                                    :
                                    <CheckCircleIcon onClick={() => handleMarkCompleteCourse(firstItemCourse.id)} className='notCompleteButton' />)
                        }
                    </div>
                    <p>{firstItemCourse.description}</p>
                    <div className='goToCourse'>
                        <h4>Udemy</h4>
                        {firstItemCourse.path_id ? <a href={firstItemCourse.link}>Go To {firstItemCourse.type.charAt(0).toUpperCase() + firstItemCourse.type.slice(1)}</a> : <a href={`/courses/${firstItemCourse.id}`}>Go To Course</a>}
                    </div>
                </div>
            </div>}
            <div className='learningPathCards'>
            {upcomingItemsCourses.length > 0 && <h3>Upcoming</h3>}
                <div className='upcomingCards'>
                    {
                        upcomingItemsCourses.map((itemCourse, index) => {
                            return (
                                <div key={index} className={((upcomingItemsCourses.length % 2 !== 0) || (upcomingItemsCourses.length === 1) ? 'long' : '')}>
                                    <div className={'learningPathCourseWrappers upcoming' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                        <div className='learningPathCard'>
                                            <div>
                                                <h2>{itemCourse.name}</h2>
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
                {completedItemsCourses.length > 0 && <h3>Completed</h3>}
                <div className='completedCards'>
                    {
                        completedItemsCourses.map((itemCourse, index) => {
                            return (
                                <div key={index} className={((completedItemsCourses.length % 3 === 0) || (completedItemsCourses.length === 1) ? ' long' : '')}>
                                    <div className={'learningPathCourseWrappers' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                        <div className='learningPathCard completed'>
                                            <div>
                                                <h2>{itemCourse.name}</h2>
                                                {
                                                    itemCourse.path_id &&
                                                    (
                                                        (itemCourse.automatically_completed || itemCourse.manually_completed ?
                                                            <CheckCircleIcon onClick={() => handleMarkCompleteItem(itemCourse.id)} className='completeButton' />
                                                            :
                                                            <CheckCircleIcon onClick={() => handleMarkCompleteItem(itemCourse.id)} className='notCompleteButton' />)
                                                    )
                                                }
                                                {
                                                    !itemCourse.path_id &&
                                                    (
                                                        (itemCourse.automatically_completed || itemCourse.manually_completed ?
                                                            <CheckCircleIcon onClick={() => handleMarkCompleteCourse(itemCourse.id)} className='completeButton' />
                                                            :
                                                            <CheckCircleIcon onClick={() => handleMarkCompleteCourse(itemCourse.id)} className='notCompleteButton' />)
                                                    )
                                                }
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