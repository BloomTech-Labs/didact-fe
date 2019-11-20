import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getLearningPaths, joinLearningPath, getYourLearningPaths } from '../../store/actions/index'

import { LearningPathsWrapper, LearningPathCard } from './YourLearningPathsStyles'


//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
    span: {
        cursor: 'pointer',
        "&:hover":{
          color: 'white'
        }
      }

}));

const AllLearningPaths = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(_ => {
        dispatch(getLearningPaths())
        dispatch(getYourLearningPaths())
    }, [dispatch])

    const learningPaths = state.learningPathReducer.learningPaths
    const yourLearningPaths = state.learningPathReducer.yourLearningPaths

    const joinPath = (id, length) => {
        let order = length + 1;
        console.log('Id', id)
        console.log('Order', order)
        dispatch(joinLearningPath(id, props.props.history, order))
    }
    console.log(learningPaths)
    const handleBack = () => {
        props.props.history.push('/courses') 
    } 

    return (
        <>
         <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px', display: 'flex', flexDirection:'row', alignItems: 'center'}}><span className={classes.span}  onClick = {handleBack}>Learning Paths</span><ChevronRightIcon style={{fontSize: '1.6rem'}}/><span>Join Path</span></p>
        </div> 
        {learningPaths && learningPaths.length > 0 ? (
        <LearningPathsWrapper>
            {learningPaths && learningPaths.map((learningPath, index) => {
                return (
                    <LearningPathCard key={index} style={{paddingLeft: '30px', marginBottom: "20px"}}>
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
            : (<h2>No Learning Paths Available</h2>)}
        </>
    )
}

export default AllLearningPaths;