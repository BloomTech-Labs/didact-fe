import React from 'react'
import {Link} from "react-router-dom"

import { LearningPathsWrapper, LearningPathCard } from '../learningPaths/YourLearningPathsStyles'

const AllLearningPaths = ({props, learningPath}) => {
    return (
        <LearningPathsWrapper>
               <LearningPathCard style={{marginBottom: "20px"}}>
            <div className='title' style={{paddingLeft: '20px'}}> 
                <h1>{learningPath.title}</h1>
                <div>
                <button><Link to={`/learning-paths/${learningPath.id}`}>Go To Path</Link></button>
                </div>
            </div>
        </LearningPathCard>
        </LearningPathsWrapper>
    )
}

export default AllLearningPaths;