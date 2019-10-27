import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DashboardIcon from '@material-ui/icons/Dashboard';
import MessageIcon from '@material-ui/icons/Message';

import Profile from '../profile/Profile'

const MobileHeaderComponent = (props) => {

        const headerStyles = makeStyles(theme => ({
        appBarDesktop: {
            width: `calc(100% - 100px)`,
            margin: "10px",
            borderRadius: "10px 10px 10px 10px",
            backgroundColor: 'gray',
            color: 'lightgray',
            top: 0,
           
        },
        appBarMobile: {
            width: `100%`,
            backgroundColor: '#5b5b5b',
            color: 'white',
            position: 'fixed',
        },
        appBarShift: {
            marginLeft: "240px",
            width: `calc(100% - (240px + 30px))`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        iconImage: {
            width: "40px",
            height: "40px",
            backgroundColor: "#ebe8e1",
            borderRadius: "50%",
        },
        iconToolBar: {
            margin: "0 5px",
        },
        toolbarIcons: {
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
        },
    }));

    const classes = headerStyles();
    console.log(classes)
    const open = props.open

    return (
        <AppBar
            className={clsx(classes.appBarMobile, {
                // [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <Typography variant="h5">
                    Didact
                </Typography>
                <div className={classes.toolbarIcons}>
                    <Button className={classes.iconToolBar} color="inherit">
                        <DashboardIcon />
                    </Button>
                    <Button className={classes.iconToolBar} color="inherit">
                        <MessageIcon />
                    </Button>
                    <Button className={classes.iconToolBar} color="inherit">
                        third
                    </Button>
                   <Profile props = {props}/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MobileHeaderComponent;