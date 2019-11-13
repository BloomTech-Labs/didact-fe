import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';

import Profile from '../profile/Profile'

const MobileHeaderComponent = (props) => {

        const headerStyles = makeStyles(theme => ({

        appBarMobile: {
            width: `100%`,
            backgroundColor: '#5b5b5b',
            color: 'white',
            position: 'fixed',
            // margin: '0'

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
            alignItems: 'center',
            width: "100%",
        },
        // Search Functionality Styles
        searchDiv: {
            display: "flex",
            flexDirection: 'row',
            alignItems: "center",
            backgroundColor: "#767573",
            width: "250px",
            borderRadius: '15px',
            padding: "0 6px",
            height: '32px',
            marginLeft: '10px'
        },
        searchDivFalse: {
            display: "flex",
            flexDirection: 'row',
            alignItems: "center",
            backgroundColor: "none",
            borderRadius: '15px',
            padding: "0 6px",
            height: '32px',
            marginLeft: '10px'
        },
        searchInput: {
            backgroundColor: 'inherit',
            width: "211px",
            border: 'none',
            outline: "none",
            height: '32px'
        }
    }));

    const classes = headerStyles();
    const [search, setSearch] = useState(false);

    const toggleSearch = () => {
        setSearch(!search)
    }

    return (
        <AppBar
            className={classes.appBarMobile}
        >
            <Toolbar>
                <Typography variant="h5"  style={{ fontFamily: "ITC Grouch", fontSize: "32px" }}>
                    Didact
                </Typography>
                <div className={search ? classes.searchDiv : classes.searchDivFalse}>
                    <SearchIcon onClick = {toggleSearch} style={{fontSize: '1.8rem', marginRight: '5px', cursor:"pointer"}}/>
                    {search && 
                    <form onSubmit={props.handleSubmit}>
                        <input className={classes.searchInput} type="text" value={props.values.search} onChange={props.handleChange('search')}></input>
                    </form>}
                </div>
                {!search &&
                <div className={classes.toolbarIcons}>
                    {/* <Button onClick={() => props.props.history.push('/')} className={classes.iconToolBar} color="inherit">
                        <DashboardIcon style={{ fontSize: "28px" }}/>
                    </Button> */}
                    <p style={{margin: '0 5px'}}>About</p>
                    <p style={{margin: '0 5px'}}>Contact</p>
                </div>}
            </Toolbar>
        </AppBar>
    )
}

export default MobileHeaderComponent;