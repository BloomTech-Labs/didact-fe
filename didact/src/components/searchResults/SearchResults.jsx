import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  courseEndPoint,
  getLearningPaths,
  getYourLearningPaths
} from "../../store/actions";

// Component Imports
import Course from "../courses/Course";
import LearningPathResults from "./LearningPathResults";
import LearningPathYourResults from "./LearningPathYourResults";

// Styling Import
import styled from "styled-components";

const TitleH2 = styled.div`
  max-width: 540px;
  width: 100%;
  text-align: left;
  font-size: 2.6rem;
  font-weight: bold;
  padding: 10px;
  font-family: Open sans;
`;

const SearchResults = ({ props, results, setValues, values }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const courses = state.coursesReducer.courses;
  const learningPaths = state.learningPathReducer.learningPaths;

  useEffect(() => {
    dispatch(courseEndPoint(results));
    dispatch(getLearningPaths(results));
  }, [dispatch, results]);

  const handleBack = () => {
    props.history.push("/");
    setValues({ ...values, search: "" });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "-10px 10px 10px 10px",
          borderBottom: "1px solid black"
        }}
      >
        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Search Results</p>
        <p
          onClick={handleBack}
          style={{ cursor: "pointer" }}
        >{`<${" "} Back To Dashboard`}</p>
      </div>
      {/* {results === "" ? null : ( */}
        <>
          <div style={{ minHeight: "300px" }}>
            {learningPaths.length === 0 ? <TitleH2>No Results In Paths</TitleH2> : <TitleH2>Learning Paths</TitleH2> }
            {learningPaths.length > 0 ? learningPaths.map(path => (
              <LearningPathResults
              key={path.id}
              props={props}
              learningPath={path}
              results={results}
            />
            )) : null}
          </div>
          {/* Courses Results */}
          <div>
            {courses.length === 0 ? <TitleH2 style={{ marginBottom: "-30px" }}>No Results In Courses</TitleH2> : <TitleH2 style={{ marginBottom: "-30px" }}>Courses</TitleH2>}
            {courses.length > 0 ? courses.map(course => (
                <Course props={props} course={course} results={results} key={course.id}/>
              )) : null}
          </div>
        </>
    </div>
  );
};

export default SearchResults;
