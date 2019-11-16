import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SideListWrapper } from './SideListStyles'

const SideList = ({ props }) => {
    const drawerStyles = makeStyles(theme => ({

        activeTab: {
            backgroundColor: "#5b5b5b",
            borderRadius: "0 20px 20px 0",
            width: "225px",
            color: "white",
            height: "50px",
            margin: "10px 0px",
            
        },
        arrow: {
            textAlign: 'right',
            marginRight: '10px',
            width: "100%",
            fontSize: '2rem',
            color: 'white' 
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            margin: "10px 0px",
            padding: 0,
        },
        listItem: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: "225px",
        },
        iconImageProfile: {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            // marginTop: '20px',
            objectFit: 'cover'
        },


    }));

    const classes = drawerStyles();

    const userName = useSelector(state => state.onboardingReducer.user);

    const handleLogOut = () => {
        localStorage.clear('token')
        props.props.history.push('/login')
    }
    console.log(props)
    const firstName = userName.first_name ? userName.first_name.substring(0, 1).toUpperCase() + userName.first_name.substring(1) : null;
    const lastName = userName.last_name ? userName.last_name.substring(0, 1).toUpperCase() + userName.last_name.substring(1) : null;

    return (
        <SideListWrapper>
            <ul className = {classes.list}>
                <NavLink
                    exact to="/"
                    style={{textDecoration: "none", color: '#5b5b5b', outline: "none !important"}}
                    activeStyle={{color: 'white'}}
                    activeClassName={classes.activeTab}
                    className = {classes.listItem}
                    key="Dashboard"
                >
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', outline: "none !important"}}>
                    <DashboardIcon style={{marginLeft: "17px", fontSize: "28px"}}/>
                    <p style={{marginLeft: "25px", fontWeight: 'bold'}}>Dashboard</p>
                    {props.props.location.pathname === "/" ? (
                        <p className={classes.arrow}><ChevronRightIcon style={{fontSize: '2.4rem', marginTop: '6px'}}/></p>
                    ) : (
                        <p className={classes.arrow}><ChevronRightIcon style={{fontSize: '2.4rem', marginTop: '6px', color: "#5b5b5b"}}/></p>
                    )}
                    
                </div>
                </NavLink>
                <NavLink
                    to="/courses"
                    style={{ textDecoration: "none", color: '#5b5b5b', outline: "none !important" }}
                    activeStyle={{color: 'white'}}
                    activeClassName={classes.activeTab}
                    className = {classes.listItem}
                    key="Add Course">
                     <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center',}}>
                        <FolderOpenIcon style={{marginLeft: "17px", fontSize: "28px"}}/>
                        <p style={{marginLeft: "25px", fontWeight: 'bold'}}>Courses</p>
                        {props.props.location.pathname === "/courses" ? (
                        <p className={classes.arrow}><ChevronRightIcon style={{fontSize: '2.4rem', marginTop: '6px'}}/></p>
                        ) : (
                        <p className={classes.arrow}><ChevronRightIcon style={{fontSize: '2.4rem', marginTop: '6px', color: "#5b5b5b"}}/></p>
                        )}
                    </div>
                </NavLink>
                <NavLink
                    to="/learning-paths"
                    style={{ textDecoration: "none", color: '#5b5b5b', outline: "none !important" }}
                    activeStyle={{color: 'white'}}
                    activeClassName={classes.activeTab}
                    className = {classes.listItem}
                    key="Learning Paths">
                     <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center',}}>
                        <InboxIcon style={{marginLeft: "17px", fontSize: "28px"}}/>
                        <p style={{marginLeft: "25px", fontWeight: 'bold'}}>Learning Paths</p>
                        {props.props.location.pathname === "/learning-paths" ? (
                        <p className={classes.arrow}><ChevronRightIcon style={{fontSize: '2.4rem', marginTop: '6px'}}/></p>
                        ) : (
                        <p className={classes.arrow}><ChevronRightIcon style={{fontSize: '2.4rem', marginTop: '6px', color: "#5b5b5b"}}/></p>
                        )}
                    </div>
                </NavLink>
            </ul>

            <div className='profileSection'>
                {userName.photo ? <img src={userName.photo} alt = "Profile" className={classes.iconImageProfile} /> : <PermIdentityIcon  className={classes.iconImageProfile} />}
                <p>{firstName + ' ' + lastName}</p>
                <p onClick={handleLogOut} className='logout'>Log Out</p>
            </div>

            {/* <List >
                <ListItem button key="Activity" className = {classes.hoverTab}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activity" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List> */}
            {/* <List >
                <ListItem
                    button
                    component={NavLink}
                    to="/courses"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Add Course">
                    <ListItemIcon>
                        <FolderOpenIcon style={{paddingLeft: "4px", fontSize: "32px"}}/>
                    </ListItemIcon>
                    <p>Courses</p>
                    <p className={classes.arrow}>></p>
                </ListItem>
            </List>

            <List >
                <ListItem
                    button
                    component={NavLink}
                    to="/learning-paths"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Learning Paths">
                    <ListItemIcon>
                        <InboxIcon style={{paddingLeft: "4px", fontSize: "32px"}}/>
                    </ListItemIcon>
                    <p>Learning Paths</p>
                    <p className={classes.arrow}>></p>
                </ListItem>
            </List> */}
            {/*<List >
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
        </SideListWrapper>
    );
}

export default SideList;