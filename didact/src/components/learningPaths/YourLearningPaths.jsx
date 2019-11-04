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

    console.log(state.learningPathReducer.yourLearningPaths)

    console.log('Your Learning Paths', learningPaths)

    const leavePath = e => {
        console.log('clicked!')
        console.log(e.target.id)
        dispatch(quitLearningPath(e.target.id))
    }

    if(!state.learningPathReducer.isLoading && learningPaths) {
        return (
            <LearningPathsWrapper>
                {
                    learningPaths.map((learningPath, index) => {
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