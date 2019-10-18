import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Profile from '../profile/Profile'

const HeaderComponent = (props) => {

    const headerStyles = makeStyles(theme => ({
    appBarDesktop: {
        width: `calc(100vw- 100px)`,
        margin: "10px 10px 10px 10px",
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: 'gray',
        color: 'lightgray',
        position: 'fixed'
    },
    // appBarDesktopProfile: {
    //     width: `calc(100vw - 100px)`,
    //     margin: "10px 2.5% 10px 10px",
    //     borderRadius: "10px 10px 10px 10px",
    //     backgroundColor: 'gray',
    //     color: 'lightgray',
    //     position: 'fixed',
    // },
    appBarMobile: {
        width: `calc(100%)`,
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: 'gray',
        color: 'lightgray',
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
    console.log(classes.appBarDesktop)
    // const [openProfile, setOpenProfile] = React.useState(false);
    const open = props.open

    // const handleOpen = () => {
    //     setOpenProfile(true);
    //   };

    //   const handleClose = () => {
    //     setOpenProfile(false);
    //   };      

    return (
        <>
        {/* {openProfile ? 
       (  */}
           <AppBar
            className={clsx(classes.appBarDesktop, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <Typography variant="h5">
                    Didact
                </Typography>
                <div className={classes.toolbarIcons}>
                    <Button className={classes.iconToolBar} color="inherit">
                        first
                    </Button>
                    <Button className={classes.iconToolBar} color="inherit">
                        second
                    </Button>
                    <Button className={classes.iconToolBar} color="inherit">
                        third
                    </Button>
                    <Button color="inherit">User Name</Button>
                    <Profile />
                    {/* <button onClick={handleOpen} className = {classes.iconImage}>
                    </button> */}
                </div>
            </Toolbar>
        </AppBar>
        {/* ) :  <AppBar
            className={clsx(classes.appBarDesktop, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <Typography variant="h5">
                    Didact
                </Typography>
                <div className={classes.toolbarIcons}>
                    <Button className={classes.iconToolBar} color="inherit">
                        first
                    </Button>
                    <Button className={classes.iconToolBar} color="inherit">
                        second
                    </Button>
                    <Button className={classes.iconToolBar} color="inherit">
                        third
                    </Button>
                    <Button color="inherit">User Name</Button>
                    <Profile open = {openProfile} setOpen = {setOpenProfile} handleClose = {handleClose}/>
                    <button onClick={handleOpen} className = {classes.iconImage}>
                    </button>
                </div>
            </Toolbar>
        </AppBar>
            } */}

        </>
    )
}

export default HeaderComponent;