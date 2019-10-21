import React from "react";

import useStyles from "./DrawerStyles";

import clsx from "clsx";
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import SideList from './SideList'

const DrawerComponent = (props) => {
    const classes = useStyles();

    const open = props.open

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={classes.menuButtonDesktop}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            {open ? (
                <div className={classes.placeholderDiv}>
                    <div className={classes.placeHolder} />
                    <div className={classes.placeHolder2} />
                </div>
            ) : (
                    <div className={classes.placeholderDiv}>
                        <div className={classes.placeHolderClosed} />
                        <div className={classes.placeHolderClosed2} />
                    </div>
                )}
            {<SideList />}
        </Drawer>
    );
};

export default DrawerComponent;