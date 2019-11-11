import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getLearningPaths, joinLearningPath, getYourLearningPaths } from '../../store/actions/index'

import { LearningPathsWrapper, LearningPathCard } from './YourLearningPathsStyles'

const AllLearningPaths = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(_ => {
        dispatch(getLearningPaths())
        dispatch(getYourLearningPaths())
    }, [dispatch])

    const learningPaths = state.learningPathReducer.learningPaths
    const yourLearningPaths = state.learningPathReducer.yourLearningPaths

    const joinPath = (id, order) => {
        dispatch(joinLearningPath(id, props.props.history, order))
    }

    return (
        <LearningPathsWrapper>
            {
                    learningPaths.map((learningPath, index) => {
                        return (
                            <LearningPathCard key={index} style={{marginBottom: "20px"}}>
                                <div className='title'> 
                                    <h1>{learningPath.name}</h1>
                                    <div>
                                        <button onClick={() => joinPath(learningPath.id, yourLearningPaths.length)} id={learningPath.id}>Join Path</button>
                                    </div>
                                </div>
                            </LearningPathCard>
                        )
                    })
                }
        </LearningPathsWrapper>
    )
}

export default AllLearningPaths;