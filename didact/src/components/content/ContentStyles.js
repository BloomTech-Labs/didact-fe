import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

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
}));

export default useStyles;