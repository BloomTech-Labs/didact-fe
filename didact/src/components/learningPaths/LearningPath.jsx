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

    const firstItemCourse = itemsCourses[0]
    itemsCourses.shift()
    console.log(itemsCourses)

    return (
        <LearningPathWrapper>
            <div className='breadcrumb'>
                <div className='breadcrumbTitle'>
                    <p>{`Learning Paths > ${learningPath.name}`}</p>
                    <Link to='/learning-paths'>{`< Back to Paths`}</Link>
                </div>
                <span></span>
            </div>
            {firstItemCourse && <div className={'learningPathCourseWrappers current' + (firstItemCourse.path_id ? ' item' : '')}>
                <div className='currentTitle'>
                    <h3>Current</h3>
                    {
                        (learningPath.creatorId === state.onboardingReducer.user.id) &&
                        <div className='editLearningButton'>
                            <Link to={`/learning-paths/${id}/edit`}>Edit</Link>
                        </div>
                    }
                </div>
                <div className='learningPathCard'>
                    <h2>{firstItemCourse.name}</h2>
                    <p>{firstItemCourse.description}</p>
                    <div className='goToCourse'>
                        <h4>Udemy</h4>
                        {firstItemCourse.path_id ? <a href={firstItemCourse.link}>Go To {firstItemCourse.type.charAt(0).toUpperCase() + firstItemCourse.type.slice(1)}</a> : <a href={`/courses/${firstItemCourse.id}`}>Go To Course</a>}
                    </div>
                </div>
            </div>}
            <div className='learningPathCards'>
                <h3>Upcoming</h3>
                {
                    itemsCourses.map((itemCourse, index) => {
                        return (
                            <div key={index}>
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