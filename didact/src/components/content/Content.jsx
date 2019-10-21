import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Dashboard from '../dashboard/Dashboard'
import AddCourse from '../courses/AddCourse'

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
            width: "200px",
            height: "100px",
            borderRadius: 15,
            margin: "10px 0",
        },
        placeHolder2: {
            backgroundColor: "#ebe8e1",
            width: "200px",
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
            {phoneSize ? (
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
            ) : null}
            {(props.location.pathname === '/addcourse') ? <AddCourse/> :
            (props.location.pathname === '/') ? <Dashboard /> :
            null}
        </div>
    )
}

export default Content;