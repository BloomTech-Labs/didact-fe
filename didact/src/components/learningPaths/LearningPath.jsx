import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getLearningPath } from '../../store/actions/index.js'
import { Link } from "react-router-dom";

import { LearningPathWrapper } from './LearningPathStyles'

const LearningPath = ({ id }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const learningPath = state.learningPathReducer.learningPath;
    const [itemsCourses, setItemsCourses] = useState([]);

    useEffect(_ => {
        dispatch(getLearningPath(id))
    }, [dispatch, id])

    useEffect(() => {
        if (learningPath.pathItems) {
            setItemsCourses(
                ([...learningPath.pathItems, ...learningPath.courses].sort(
                    (a, b) => a.path_order - b.path_order
                ))
            );
        }
    }, [learningPath.pathItems, learningPath.courses]) 

    return ( 
        <LearningPathWrapper>
            <div className='editLearning'>
                <p className='editLearningTitle'>
                    {`Learning Path: ${learningPath.name}`}
                </p>
                {
                    (learningPath.creatorId === state.onboardingReducer.user.id) &&
                    <div className='editLearningButton'>
                        <Link to={`/learning-paths/${id}/edit`}>Edit Path</Link>
                    </div>
                }
            </div>
            <div>
                {
                    itemsCourses.map((itemCourse, index) => {
                        if (itemCourse.path_order === 0) {
                            return (
                                <div className={'learningPathCourseWrappers current' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                    <h3>Current</h3>
                                    <div className='learningPathCard'>
                                        <h2>{itemCourse.name}</h2>
                                        <p>{itemCourse.description}</p>
                                        <div className='goToCourse'>
                                            <h4>Udemy</h4>
                                            {itemCourse.path_id ? <a href={itemCourse.link}>Go To {itemCourse.type.charAt(0).toUpperCase() + itemCourse.type.slice(1)}</a> : <a href={`/courses/${itemCourse.id}`}>Go To Course</a>}
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (itemCourse.path_order === 1) {
                            return (
                                <div className={'learningPathCourseWrappers next' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                    <h3>Next</h3>
                                    <div className='learningPathCard'>
                                        <h2>{itemCourse.name}</h2>
                                        <p>{itemCourse.description}</p>
                                        <div className='goToCourse'>
                                            <h4>Udemy</h4>
                                            {itemCourse.path_id ? <a href={itemCourse.link}>Go To {itemCourse.type.charAt(0).toUpperCase() + itemCourse.type.slice(1)}</a> : <a href={`/courses/${itemCourse.id}`}>Go To Course</a>}
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={'learningPathCourseWrappers upcoming' + (itemCourse.path_id ? ' item' : '')} key={index}>
                                    {itemCourse.path_order === 2 && <h3>Upcoming</h3>}
                                    <div className='learningPathCard'>
                                        <h2>{itemCourse.name}</h2>
                                        <p>{itemCourse.description}</p>
                                        <div className='goToCourse'>
                                            <h4>Udemy</h4>
                                            {itemCourse.path_id ? <a href={itemCourse.link}>Go To {itemCourse.type.charAt(0).toUpperCase() + itemCourse.type.slice(1)}</a> : <a href={`/courses/${itemCourse.id}`}>Go To Course</a>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {/* <div className='learningPathCourseWrappers'>
                    <h3>Completed</h3>
                    <div className='completed learningPathCard'>
                        <h2>
                            {course.name}
                        </h2>
                        <p>
                            {course.description}
                        </p>
                        <div className='goToCourse'>
                            <h4>
                                Udemy
                            </h4>
                            <a>
                                Go To Course
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </LearningPathWrapper>
    )
}

export default LearningPath