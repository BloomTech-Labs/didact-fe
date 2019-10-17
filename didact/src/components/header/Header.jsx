import React from 'react'

import useStyles from './HeaderStyles'

import clsx from 'clsx'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const HeaderComponent = (props) => {

    const classes = useStyles();

    const open = props.open

    return (
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
                    <div className={classes.iconImage}></div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderComponent;