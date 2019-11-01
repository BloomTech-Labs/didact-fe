import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";

import { getLearningPaths } from '../../store/actions/index'

import { LearningPathsWrapper } from './YourLearningPathsStyles'

const YourLearningPaths = (props) => {


    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(_ => {
        dispatch(getLearningPaths())
    }, [dispatch])

    const learningPaths = state.learningPathReducer.learningPaths

    console.log(state.learningPathReducer.learningPaths)

    if(!state.learningPathReducer.isLoading && learningPaths) {
        return (
            <LearningPathsWrapper>
                {
                    learningPaths.map((learningPath, index) => {
                        return (
                            <div key={index} className='learningPathCard'>
                                <div className='title'> 
                                    <h1>{learningPath.name}</h1>
                                    <Link to={`/learning-paths/${learningPath.id}`}>Go To Path</Link>
                                </div>
                                <div className='icon'>
                                    Icon
                                </div>
                            </div>
                        )
                    })
                }
                <div className='buttons'>
                    <Link>Join a Learning Path</Link>
                    <Link to={'/learning-paths/add'}>Create a New Learning Path</Link>
                </div>
            </LearningPathsWrapper>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default YourLearningPaths;