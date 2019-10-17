import React from 'react'

import contentStyles from './ContentStyles'

import Dashboard from '../dashboard/Dashboard'
import AddCourse from '../courses/AddCourse'


  
const Content = (props) => {

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
            (props.location.pathname === '/dashboard') ? <Dashboard /> :
          null}  
            {/* <Dashboard /> */}
        </div>
    )
}

export default Content;