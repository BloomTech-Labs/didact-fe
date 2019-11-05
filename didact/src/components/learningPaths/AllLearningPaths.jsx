import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getLearningPaths, joinLearningPath } from '../../store/actions/index'

import { LearningPathsWrapper } from './YourLearningPathsStyles'

const AllLearningPaths = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(_ => {
        dispatch(getLearningPaths())
    }, [dispatch])

    const learningPaths = state.learningPathReducer.learningPaths

    const joinPath = e => {
        dispatch(joinLearningPath(e.target.id, props.props.history))
    }

    return (
        <LearningPathsWrapper>
            {
                    learningPaths.map((learningPath, index) => {
                        return (
                            <div key={index} className='learningPathCard'>
                                <div className='title'> 
                                    <h1>{learningPath.name}</h1>
                                    <div>
                                        <button onClick={joinPath} id={learningPath.id}>Join Path</button>
                                    </div>
                                </div>
                                <div className='icon'>
                                    Icon
                                </div>
                            </div>
                        )
                    })
                }
        </LearningPathsWrapper>
    )
}

export default AllLearningPaths;