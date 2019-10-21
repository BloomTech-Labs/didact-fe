import React from "react";

import useStyles from "./DrawerStyles";

import clsx from "clsx";
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import SideList from './SideList'

const MobileDrawerComponent = (props) => {
    const classes = useStyles();

    const openMobile = props.openMobile

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpenMobile]: openMobile,
                [classes.drawerCloseMobile]: !openMobile,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpenMobile]: openMobile,
                    [classes.drawerCloseMobile]: !openMobile,
                }),
            }}
            open={openMobile}
        >
            <div className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpenMobile}
                    edge="start"
                    className={classes.menuButtonMobile}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            {<SideList />}
        </Drawer>
    );
};

export default MobileDrawerComponent;