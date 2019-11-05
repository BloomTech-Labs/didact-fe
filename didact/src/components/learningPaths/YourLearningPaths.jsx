import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";

import { getYourLearningPaths, quitLearningPath } from '../../store/actions/index'

import { LearningPathsWrapper } from './YourLearningPathsStyles'

const YourLearningPaths = (props) => {


    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(_ => {
        dispatch(getYourLearningPaths())
    }, [dispatch])

    const learningPaths = state.learningPathReducer.yourLearningPaths

    const leavePath = e => {
        dispatch(quitLearningPath(e.target.id))
    }

    return (
        <LearningPathsWrapper>
            {
                learningPaths.length > 0 && (learningPaths.map((learningPath, index) => {
                    return (
                        <div key={index} className='learningPathCard'>
                            <div className='title'> 
                                <h1>{learningPath.name}</h1>
                                <div>
                                    <button><Link to={`/learning-paths/${learningPath.id}`}>Go To Path</Link></button>
                                    <button onClick={leavePath} id={learningPath.id}>Leave Path</button>
                                </div>
                            </div>
                            <div className='icon'>
                                Icon
                            </div>
                        </div>
                    )
                }))
            }
            {
                learningPaths.length === 0 && <h1>You are not apart of any paths</h1>
            }
            <div className='buttons'>
                <Link to={'/learning-paths/join'}>Join a Learning Path</Link>
                <Link to={'/learning-paths/add'}>Create a New Learning Path</Link>
            </div>
        </LearningPathsWrapper>
    )
}

export default YourLearningPaths;