import React, { useEffect } from 'react'
import { courseEndPoint } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from '../../store/actions/index.js'

import { LearningPathWrapper } from './LearningPathStyles'

const LearningPath = props => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    useEffect(_ => {
        dispatch(getCourseById(1))
    }, [dispatch])

    const course = state.coursesReducer.course
    console.log(course)
    return (
        <LearningPathWrapper>
            <div className='editLearning'>
                <div className='editLearningTitle'>
                    Learning Path: Getting Started with Didact
                </div>
                <div className='editLearningButton'>
                    Edit Path
                </div>
            </div>
            <div>
                <div className='learningPathCourseWrappers'>
                    <h3>Current</h3>
                    <div className='learningPathCard'>
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
                </div>
                <div className='learningPathCourseWrappers'>
                    <h3>Next</h3>
                    <div className='learningPathCard'>
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
                </div>
                <div className='learningPathCourseWrappers'>
                    <h3>Upcoming</h3>
                    <div className='learningPathCard'>
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
                </div>
                <div className='learningPathCourseWrappers'>
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
                </div>
            </div>
        </LearningPathWrapper>
    )
}

export default LearningPath