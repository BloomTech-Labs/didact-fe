import React from 'react'

import Dashboard from '../dashboard/Dashboard'
import AddCourse from '../courses/AddCourse'
import DetailedCourse from '../courses/DetailedCourse'
import EditCourse from '../courses/EditCourse'
import AllCourses from "../courses/AllCourses.jsx"
import AddLearningPaths from '../learningPaths/AddLearningPaths'
import EditLearningPaths from '../learningPaths/EditLearningPaths'
import LearningPath from '../learningPaths/LearningPath'
import YourLearningPaths from '../learningPaths/YourLearningPaths'
import AllLearningPaths from '../learningPaths/AllLearningPaths'
import AddPathItems from '../learningPaths/pathItems/AddPathItems'
import EditPathItems from '../learningPaths/pathItems/EditPathItems'
import SearchResults from '../searchResults/SearchResults';
import About from '../about/About'
import Contact from '../contact/Contact'

const Content = (props) => {
    
    return (

        <div>
            {(() =>
            {
                switch(props.page)
                {
                    case ('dashboard'):
                        return <Dashboard props = {props}/>
                    case ('addcourse'):
                        return <AddCourse props = {props}/>
                    case ('courses'):
                        return <AllCourses props = {props}/>
                    case ('detailedcourse'):
                        return <DetailedCourse id={props.match.params.id} props = {props}/>
                    case ('editcourse'):
                        return <EditCourse id={props.match.params.id} props={props}/>
                    case ('addlearningpath'):
                        return <AddLearningPaths props={props}/>
                    case ('editlearningpath'):
                        return <EditLearningPaths id={props.match.params.id} props={props}/>
                    case ('learningpath'):
                        return <LearningPath props={props} id={props.match.params.id}/>
                    case ('addpathitem'):
                        return <AddPathItems props={props}/>
                    case ('editpathitem'):
                        return <EditPathItems props={props}/>
                    case ('learningpaths'):
                        return <AllLearningPaths props={props}/>
                    case ('yourlearningpaths'):
                        return <YourLearningPaths props={props}/>
                    case ('searchresults'):
                        return <SearchResults props={props} setValues={props.setValues} results={props.results}/>
                    case ('about'):
                        return <About props={props}/>
                    case ('contact'):
                        return <Contact props={props}/>
                    default:
                        break;
                }
            })()}
        </div>
    )
}

export default Content;