import React from 'react'
import { NavLink } from "react-router-dom";

import useStyles from "./DrawerStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

export const SideList = () => {

    const classes = useStyles();

    return (
        <>
            
            <List className={classes.hoverTab}>
                <ListItem
                    className={classes.hoverTab}
                    button
                    component={NavLink}
                    to="/dashboard"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Dashboard"
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>

            <List className={classes.hoverTab}>
                <ListItem button key="Activity">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activity" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List className={classes.hoverTab}>
                <ListItem className={classes.hoverTab}
                    button
                    component={NavLink}
                    to="/addcourse"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Add Course">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Courses" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List className={classes.hoverTab}>
                <ListItem button key="Learning Paths">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Learning Paths" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List className={classes.hoverTab}>
                <ListItem button key="Profile">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
        </>
    );
}

export default SideList;