import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DashboardIcon from '@material-ui/icons/Dashboard';

import Profile from '../profile/Profile'

const MobileHeaderComponent = (props) => {

        const headerStyles = makeStyles(theme => ({

        appBarMobile: {
            width: `100%`,
            backgroundColor: '#5b5b5b',
            color: 'white',
            position: 'fixed',
            // margin: '0'

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
            alignItems: 'center',
            width: "100%",
        },
    }));

    const classes = headerStyles();

    return (
        <AppBar
            className={classes.appBarMobile}
        >
            <Toolbar>
                <Typography variant="h5"  style={{ fontFamily: "ITC Grouch", fontSize: "32px" }}>
                    Didact
                </Typography>
                <div className={classes.toolbarIcons}>
                    <Button onClick={() => props.props.history.push('/')} className={classes.iconToolBar} color="inherit">
                        <DashboardIcon style={{ fontSize: "28px" }}/>
                    </Button>
                   
                    {/* <Button className={classes.iconToolBar} color="inherit">
                        <MessageIcon />
                    </Button> */}
                    {/* <Button className={classes.iconToolBar} color="inherit">
                        third
                    </Button> */}
                    {props.tabletSize ? (<p style = {{paddingRight: '15px'}}>{props.userName.email}</p>) : null}
                   <Profile props = {props}/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MobileHeaderComponent;