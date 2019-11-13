import React, { useEffect, useState } from "react";
import { verifyToken } from "../../store/actions/index.js"
import { useDispatch, useSelector } from "react-redux"
import { PageFlex} from './PageStyles'
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
 
//Material UI Icons
import CssBaseline from "@material-ui/core/CssBaseline"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import DashboardIcon from '@material-ui/icons/Dashboard'
import SearchIcon from '@material-ui/icons/Search';

import DrawerComponent from '../drawer/Drawer'
import MobileDrawerComponent from '../drawer/MobileDrawer'
import MobileHeaderComponent from '../header/MobileHeader'
import Content from '../content/Content'
import Profile from '../profile/Profile'


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "lightgray",
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(3),
    },
    contentMobile: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginLeft: "63px",

    },
    contentShadow: {
        background: "rgba(0, 0, 0, 0.8)",
        filter: "brightness(50%)",
        overflowX: 'hidden',
        zIndex: 100,
        height: "100vh",
        top: 0,
        left: 0,
        paddingLeft: "80px",
        padding: theme.spacing(2),
    },
    toolbar: {
        display: "flex",
        alignItems: "center", 
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    // Search Functionality Styles
    searchDiv: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#767573",
        width: "240px",
        borderRadius: '15px',
        padding: "0 6px",
        height: '32px'
    },
    searchInput: {
        backgroundColor: 'inherit',
        width: "211px",
        border: 'none',
        outline: "none",
        height: '32px'
    }
}));

function MainPage(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const phoneSize = useMediaQuery("(max-width:600px)");
    const tabletSize = useMediaQuery('(max-width:770px, min-width: 601px');
    const mediumScreenSize = useMediaQuery("(max-width:920px)");
    const userName = useSelector(state => state.onboardingReducer.user);
    const token = localStorage.getItem("token")
    const [open, setOpen] = React.useState(true);
    const [openMobile, setOpenMobile] = React.useState(false);
    const [values, setValues] = useState({
        search: ''
    });
    const [results, setResults] = useState()
    

    useEffect(_ => {
        dispatch(verifyToken(props.history))
    }, [token, dispatch, props.history])

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    //Needed for Header Search Function
    const handleChange = name => event => {
        setValues({[name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setResults(values.search)
        props.history.push('/results')
        // setValues('')
    }

    console.log(results)

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

    return (
        // MOBILE CODE ****************************************************************************
        <>
            {phoneSize || tabletSize ? (
                <div className={classes.root} onClick={() => closeHandleClick()}>
                    <CssBaseline />
                    <>
                        <div>
                            <MobileDrawerComponent handleDrawerOpenMobile={handleDrawerOpenMobile()} openMobile={openMobile} props={props} />
                        </div>
                        <div>
                            <MobileHeaderComponent handleSubmit = {handleSubmit} handleChange = {handleChange} values = {values} props={props} tabletSize={tabletSize} userName={userName} />
                            <main className={openMobile ? classes.contentShadow : classes.contentMobile}>
                                <div className={classes.toolbar} />
                                <Content phoneSize={phoneSize} open={open} {...props} results={results} values={values} setValues={setValues}/>
                                {/*************************ADD COMPONENTS HERE *********************** */}
                            </main>
                        </div>
                    </>
                    {/* {openMobile ?
                        (
                        <div className = {classes.scrollBarMobileFix}>

                        </div>
                        ) : ( 
                        null )
                         } */}
                </div>
            )
                // END OF MOBILE CODE *******************************************************************
                :
                // BEGINNING OF DESKTOP CODE ************************************************************
                (
                    <div className={classes.root}>
                        <CssBaseline />
                        <PageFlex>
                            <div className="drawer">
                                <DrawerComponent handleDrawerOpen={handleDrawerOpen} open={open} props={props} />
                            </div>
                            <div className="headerMain">
                                {/* <HeaderComponent props = {props} open={open} /> */}
                                {/* <HeaderComponent open={open} /> */}
                                <div className="header">
                                    {/* Search Functionality Below */}
                                    <div className={classes.searchDiv}>
                                    <SearchIcon style={{fontSize: '1.8rem', marginRight: '5px'}}/>
                                    <form onSubmit={handleSubmit}>
                                        <input className={classes.searchInput} type="text" value={values.search} onChange={handleChange('search')}></input>
                                    </form>
                                    </div>

                                    <div className="navSection">
                                        <p>About</p>
                                        <p>Contact</p>
                                    </div>
                                </div>
                                <main className={classes.content}>
                                    {/* <div className={classes.toolbar} /> */}
                                    <Content mediumScreenSize={mediumScreenSize} phoneSize={phoneSize} open={open} setValues={setValues} values={values} tabletSize={tabletSize} {...props} results={results}/>
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
