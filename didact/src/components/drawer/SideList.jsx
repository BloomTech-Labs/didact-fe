import React from 'react'
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const SideList = ({props}) => {
    console.log(props.props.match.url)
    const coursesTab = props.props.match.url = '/courses'
    const dashboardTab = props.props.match.url = '/'
    const drawerStyles = makeStyles(theme => ({
    
        activeTab: {
            backgroundColor: "#5b5b5b",
            borderRadius: "0 20px 20px 0",
            width: "215px",
            color: "white",
            "&:hover": {
                backgroundColor: "#5b5b5b",
                borderRadius: "0 20px 20px 0",
                width: "215px",
                color: "white",
            },
          },
          arrow: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignContent: 'center',
            color: "white", 
          },
        //   hoverTab: {
        //       "&:hover": {
        //           backgroundColor: "white",
        //           color: "black",
        //       },
        //   }
          
    }));

    const classes = drawerStyles();

    return (
        <>
            
            <List>
                <ListItem className = {classes.hoverTab}
                    button
                    component={NavLink}
                    exact to="/"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Dashboard"
                >
                    <ListItemIcon>
                       {dashboardTab ? (<DashboardIcon style = {{color: "#5b5b5b"}}/>) : (<DashboardIcon style = {{color: "white"}}/>)} 
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>

            {/* <List >
                <ListItem button key="Activity" className = {classes.hoverTab}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activity" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List> */}
            <List >
                <ListItem 
                    className = {classes.hoverTab}
                    button
                    component={NavLink}
                    to="/courses"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Add Course">
                    <ListItemIcon>
                    ( <FolderOpenIcon style = {{color: "white"}}/>) : ( <FolderOpenIcon style = {{color: "#5b5b5b"}}/>)} 
                    </ListItemIcon>
                    <ListItemText primary="Courses" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            {/* <List >
                <ListItem className = {classes.hoverTab} button key="Learning Paths">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Learning Paths" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Tasks">
                    <ListItemIcon>
                        <DoneAllIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Calendar">
                    <ListItemIcon>
                        <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Tools">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tools" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Profile">
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List> */}
        </>
    );
}

export default SideList;