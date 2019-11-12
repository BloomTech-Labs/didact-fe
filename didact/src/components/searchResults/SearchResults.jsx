import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {courseEndPoint, getLearningPaths, getYourLearningPaths  } from '../../store/actions'

import Course from '../courses/Course'
import LearningPathResults from './LearningPathResults'
import LearningPathYourResults from './LearningPathYourResults'

const SearchResults = (props) => {
    const dispatch=useDispatch()
    const state=useSelector(state => state)
    const courses=state.coursesReducer.courses
    const learningPaths=state.learningPathReducer.learningPaths
    const yourLearningPaths=state.learningPathReducer.yourLearningPaths

    const allPaths=learningPaths.concat(yourLearningPaths);

    const [values, setValues] = useState({
        search: ''
    });
    const [results, setResults] = useState()
    const [errors, setErrors] = useState();

    useEffect(() => {
        dispatch(courseEndPoint())
        dispatch(getLearningPaths())
        dispatch(getYourLearningPaths())
    }, [dispatch])

    console.log(courses)
    console.log(allPaths)

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setResults(values.search)
    }

    


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={values.search} onChange={handleChange('search')}></input>
            <button type="submit">Submit</button>
            </form>
            {results === '' ? <p>Search For Results</p> : (
            <>
            <div>
            {results ? results.length > 1 ? (<h2>Learning Paths</h2>) : null : null}
            {results && yourLearningPaths ? yourLearningPaths.map(keyword => {
            return (
                (keyword.name.includes(`${results}`)) || 
                (keyword.description.includes(`${results}`)) ||
                (!keyword.category === null && keyword.category.includes(`${results}`))
            ) ?
             <LearningPathYourResults props = {props} learningPath = {keyword}/> : null
            }) : null}
            {results && learningPaths ? learningPaths.map(keyword => {
            return (
                (keyword.name.includes(`${results}`)) || 
                (keyword.description.includes(`${results}`)) ||
                (!keyword.category === null && keyword.category.includes(`${results}`))
            ) ?
             <LearningPathResults props = {props} learningPath = {keyword}/> : null
            }) : null}
            </div>
            <div>
            {results ? results.length > 1 ? (<h2>Courses</h2>) : null : null}
            {results ? courses.map(keyword => {
            return (
                (keyword.name.includes(`${results}`)) || 
                (keyword.description.includes(`${results}`)) ||
                (keyword.link.includes(`${results}`)) ||
                (!keyword.category === null && keyword.category.includes(`${results}`)) ||
                (keyword.foreign_instructors.includes(`${results}`)) 
            ) ?
             <Course course = {keyword}/> : null
             }) : null}
            </div>
            </>
            )}
        </div>
    )
}

export default SearchResults;