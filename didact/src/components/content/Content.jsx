import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


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


const Content = (props) => {
    
    const contentStyles = makeStyles(theme => ({

        placeholderDiv: {
            display: "flex",
            justifyContent: "center",
            alignContent: "space-evenly",
            margin: "20px 0",
            flexFlow: "column wrap",
        },
        placeholderDivShadowed: {
            display: "flex",
            justifyContent: "center",
            alignContent: "space-evenly",
            margin: "20px 0",
            flexFlow: "column wrap",
        },
        placeHolder: {
            backgroundColor: "gray",
            width: "240px",
            height: "100px",
            borderRadius: 15,
            margin: "10px 0",
        },
        placeHolder2: {
            backgroundColor: "#ebe8e1",
            width: "240px",
            height: "120px",
            borderRadius: 15,
            margin: "10px 0",
        },
    }));

    const classes = contentStyles()

    const open = props.open
    const phoneSize = props.phoneSize
    

    return (

        <div>
            {/* {phoneSize ? (
                open ? (
                    <div className={classes.placeholderDiv}>
                        <div className={classes.placeHolder} />
                        <div className={classes.placeHolder2} />
                    </div>
                ) : (
                    <div className={classes.placeholderDiv}>
                    <div className={classes.placeHolder} />
                    <div className={classes.placeHolder2} />
                </div>
                    )
            ) : null} */}
            {(() =>
            {
                // case ('courses'):
                    //     return <DetailedCourse id={props.match.params.id} />

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
                    default:
                        break;
                }
            })()}
        </div>
    )
}

export default Content;