import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

import { getLearningPaths, joinLearningPath, getYourLearningPaths } from '../../store/actions/index'

import { LearningPathsWrapper, LearningPathCard } from '../learningPaths/YourLearningPathsStyles'

const AllLearningPaths = ({props, learningPath}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // console.log(learningPath)
    const yourLearningPaths = state.learningPathReducer.yourLearningPaths

  
    return (
        <LearningPathsWrapper>
               <LearningPathCard style={{marginBottom: "20px"}}>
            <div className='title' style={{paddingLeft: '20px'}}> 
                <h1>{learningPath.name}</h1>
                <div>
                <button><Link to={`/learning-paths/${learningPath.id}`}>Go To Path</Link></button>
                </div>
            </div>
        </LearningPathCard>
        </LearningPathsWrapper>
    )
}

export default AllLearningPaths;