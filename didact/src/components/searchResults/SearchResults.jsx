import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {courseEndPoint, getLearningPaths, getYourLearningPaths  } from '../../store/actions'

// Component Imports
import Course from '../courses/Course'
import LearningPathResults from './LearningPathResults'
import LearningPathYourResults from './LearningPathYourResults'

// Styling Import
import styled from 'styled-components';

const TitleH2 = styled.div `
    max-width: 540px;
    width: 100%;
    text-align: center;
    font-size: 2.6rem;
    font-weight: bold;
    padding: 10px;
`

const SearchResults = ({props, results}) => {
    const dispatch=useDispatch()
    const state=useSelector(state => state)
    const courses=state.coursesReducer.courses
    const learningPaths=state.learningPathReducer.learningPaths
    const yourLearningPaths=state.learningPathReducer.yourLearningPaths
    const allPaths=learningPaths.concat(yourLearningPaths);


    useEffect(() => {
        dispatch(courseEndPoint())
        dispatch(getLearningPaths())
        dispatch(getYourLearningPaths())
    }, [dispatch])

    
    return (
        <div>
            {results === '' ? props.history.goBack() : (
            <>
            <div>
            {/* Your Learning Path Results */}
            {results ? results.length > 1 ? (<TitleH2>Learning Paths</TitleH2>) : null : null}
            {results && yourLearningPaths ? yourLearningPaths.map(keyword => {
            return (
                (keyword.name.toLowerCase().includes(`${results.toLowerCase()}`)) || 
                (keyword.description.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (!keyword.category === null && keyword.category.toLowerCase().includes(`${results.toLowerCase()}`))
            ) ? ( <LearningPathYourResults props = {props} learningPath = {keyword} results={results}/> ) : null}) : null}

            {/* Learning Path Results */}
            {results && learningPaths ? learningPaths.map((keyword) => {
            return (
                (keyword.name.toLowerCase().includes(`${results.toLowerCase()}`)) || 
                (keyword.description.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (!keyword.category === null && keyword.category.toLowerCase().includes(`${results.toLowerCase()}`))
            ) ?
             <LearningPathResults props = {props} learningPath = {keyword} results={results}/> :
              null
            }) : null}
            </div>

            {/* Courses Results */}
            <div>
            {results ? results.length > 1 ? (<TitleH2 style={{marginBottom: "-20px"}}>Courses</TitleH2>) : null : null}
            {results && courses ? courses.map(keyword => {
            return (
                (keyword.name.toLowerCase().includes(`${results.toLowerCase()}`)) || 
                (keyword.description.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (keyword.link.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (!keyword.category === null && keyword.category.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (keyword.foreign_instructors.toLowerCase().includes(`${results.toLowerCase()}`)) 
            ) ?
             <Course course = {keyword} results={results}/> : null
             }) : null}
            </div>
            </>
            )}
        </div>
    )
}

export default SearchResults;