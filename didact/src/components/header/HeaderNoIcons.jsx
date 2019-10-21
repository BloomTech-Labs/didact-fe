import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start"
  },
  appBar: {
      margin: "10px",
      borderRadius: "15px",
      width: `calc(100% - 20px)`,
      backgroundColor: 'gray',
      color: 'lightgray',

  }
}));


const HeaderSecondary = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" className = {classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Didact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default HeaderSecondary;