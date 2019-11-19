import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getLearningPaths, joinLearningPath, getYourLearningPaths } from '../../store/actions/index'

import { LearningPathsWrapper, LearningPathCard } from '../learningPaths/YourLearningPathsStyles'

const AllLearningPaths = ({props, learningPath}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(learningPath)
    const yourLearningPaths = state.learningPathReducer.yourLearningPaths

    const joinPath = (id, order) => {
        dispatch(joinLearningPath(id, props.history, order))
    }

    return (
        <LearningPathsWrapper>
               <LearningPathCard style={{marginBottom: "20px"}}>
            <div className='title' style={{paddingLeft: '20px'}}> 
                <h1>{learningPath.name}</h1>
                <div>
                    <button onClick={() => joinPath(learningPath.id, yourLearningPaths.length)} id={learningPath.id}>Join Path</button>
                </div>
            </div>
        </LearningPathCard>
        </LearningPathsWrapper>
    )
}

export default AllLearningPaths;