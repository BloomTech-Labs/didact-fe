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
    text-align: left;
    font-size: 2.6rem;
    font-weight: bold;
    padding: 10px;
    font-family: Open sans;
`

const SearchResults = ({props, results, setValues, values}) => {
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

    const handleBack = () => {
        props.history.push('/')
        setValues({ ...values, search: "" })
    }    
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 10px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px'}}>Search Results</p>
                <p onClick = {handleBack} style={{cursor: 'pointer'}}>{`<${" "} Back To Dashboard`}</p>
            </div>
            {results === '' ? null : (
            <>
            <div style={{minHeight: '300px'}}>
            {/* Your Learning Path Results */}
           <TitleH2>Learning Paths</TitleH2>
            {results && yourLearningPaths ? yourLearningPaths.map(keyword => {
            return (
                (keyword.name && keyword.name.toLowerCase().includes(`${results.toLowerCase()}`)) || 
                (keyword.description && keyword.description.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (!keyword.category === null && keyword.category.toLowerCase().includes(`${results.toLowerCase()}`))
            ) ? ( <LearningPathYourResults props = {props} learningPath = {keyword} results={results}/> ) : null}) : null}

            {/* Learning Path Results */}
            {results && learningPaths ? learningPaths.map((keyword) => {
            return (
                (keyword.name && keyword.name.toLowerCase().includes(`${results.toLowerCase()}`)) || 
                (keyword.description && keyword.description.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (!keyword.category === null && keyword.category.toLowerCase().includes(`${results.toLowerCase()}`))
            ) ?
             <LearningPathResults props = {props} learningPath = {keyword} results={results}/> :
              null
            }) : null}
            </div>

            {/* Courses Results */}
            <div>
            <TitleH2 style={{marginBottom: "-30px"}}>Courses</TitleH2>
            {results && courses ? courses.map(keyword => {
            return (
                (keyword.name && keyword.name.toLowerCase().includes(`${results.toLowerCase()}`)) || 
                (keyword.description && keyword.description.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (keyword.link && keyword.link.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (!keyword.category === null && keyword.category.toLowerCase().includes(`${results.toLowerCase()}`)) ||
                (keyword.foreign_instructors && keyword.foreign_instructors.toLowerCase().includes(`${results.toLowerCase()}`)) 
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