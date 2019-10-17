import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    appBarDesktop: {
        width: `calc(100% - 100px)`,
        margin: "10px",
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: 'gray',
        color: 'lightgray',
        position: 'fixed'
    },
    appBarMobile: {
        width: `calc(100%)`,
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: 'gray',
        color: 'lightgray',
        position: 'fixed',
    },
    appBarShift: {
        marginLeft: "240px",
        width: `calc(100% - (${drawerWidth}px + 30px))`,
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

export default useStyles