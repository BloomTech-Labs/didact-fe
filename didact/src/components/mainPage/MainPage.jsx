import React, { useEffect } from "react";
import { courseEndPoint, verifyToken } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

import { PageFlex } from './PageStyles'

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import DrawerComponent from '../drawer/Drawer'
import MobileDrawerComponent from '../drawer/MobileDrawer'
import HeaderComponent from '../header/Header'
import MobileHeaderComponent from '../header/MobileHeader'
import Content from '../content/Content'


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        backgroundColor: "lightgray",
       
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    contentMobile: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingLeft: "80px",
      },
    contentShadow: {
        background: "rgba(0, 0, 0, 0.8)",
        filter: "brightness(50%)",
        zIndex: 100,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        flexGrow: 1,
        paddingLeft: "80px",
        padding: theme.spacing(3),
        overflow: "hidden",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
}));

function MainPage(props) {
    const classes = useStyles();
   
    const theme = useTheme();
    // const tabletSize = useMediaQuery("(max-width:770px");
    const phoneSize = useMediaQuery("(max-width:770px)");
    const [open, setOpen] = React.useState(true);
    const [openMobile, setOpenMobile] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerOpenMobile = () => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpenMobile(!openMobile);
    };

    const closeHandleClick = () => {
        if (openMobile) setOpenMobile(false)
    }


    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(courseEndPoint());
    }, [dispatch]);

   

    return (
        // MOBILE CODE ****************************************************************************
        <>
            {phoneSize ? (
                <div className={classes.root} onClick={() => closeHandleClick()}>
                    <CssBaseline />
                    <PageFlex>
                        <div>
                            <MobileDrawerComponent handleDrawerOpenMobile={handleDrawerOpenMobile()} openMobile={openMobile} />
                        </div>
                        <div>
                            <MobileHeaderComponent />
                            <main className={openMobile ? classes.contentShadow : classes.contentMobile}>
                                <div className={classes.toolbar} />
                                <Content phoneSize={phoneSize} open={open} {...props}/>
                                {/*************************ADD COMPONENTS HERE *********************** */}
                            </main>
                        </div>
                    </PageFlex>
                </div>
            )
                // END OF MOBILE CODE *******************************************************************
                :
                // BEGINNING OF DESKTOP CODE ************************************************************
                (
                    <div className={classes.root}>
                        <CssBaseline />
                        <PageFlex>
                            <div>
                                <DrawerComponent handleDrawerOpen={handleDrawerOpen} open={open} />
                            </div>
                            <div style={{width: "100%"}}>
                                <HeaderComponent open={open} />
                                <main className={classes.content}>
                                    <div className={classes.toolbar} />
                                    <Content phoneSize={phoneSize} open={open} {...props}/>
                                    {/*************************ADD COMPONENTS HERE *********************** */}
                                </main>
                            </div>
                        </PageFlex>
                    </div>
                )}
        </>
    );
}

export default MainPage;
