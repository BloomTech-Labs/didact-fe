import { makeStyles } from '@material-ui/core/styles'

// const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    
    activeTab: {
        backgroundColor: "gray",
        borderRadius: "0 20px 20px 0",
        width: "215px",
        color: "white",
        "&:hover": {
        backgroundColor: "gray",
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
    drawer: {
        width: 0,
        flexShrink: 0,
        whiteSpace: "nowrap",
        marginRight: '10px'
    },
    drawerOpen: {
        width: "240px",
        height: "800px",
        margin: "10px",
        borderRadius: "15px",
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8) + 1, 
        margin: "10px",
        height: "800px",
        borderRadius: "15px",
        },
    },
    drawerOpenMobile: {
        position: 'absolute',
        width: "240px",
        height: "500px",
        margin: "37px 0 10px 5px",
        borderRadius: "15px",
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerCloseMobile: {
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: "hidden",
        height: "500px",
        margin: "73px 10px 10px 10px",
        borderRadius: "15px",
        // position: 'relative',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(7) + 1,
        },
    },
    menuButtonMobile: {
        marginRight: '-4px'
    },
    menuButtonDesktop: {
        marginLeft: theme.spacing(1),
    },
    placeholderDiv: {
        display: "flex",
        justifyContent: "center",
        alignContent: "space-evenly",
        margin: "20px 0",
        flexFlow: "column wrap",
    },
    placeholderDivShadowed: {
        display: "flex",
        justifyContent: "center",
        alignContent: "space-evenly",
        margin: "20px 0",
        flexFlow: "column wrap",
    },
    placeHolder: {
        backgroundColor: "gray",
        width: "200px",
        height: "100px",
        borderRadius: 15,
        margin: "10px 0",
    }, 
    placeHolder2: {
        backgroundColor: "#ebe8e1",
        width: "200px",
        height: "120px",
        borderRadius: 15,
        margin: "10px 0",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
}));

export default useStyles;