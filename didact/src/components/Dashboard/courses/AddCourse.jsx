import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clsx from "clsx";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  
  button: {
    boxShadow: 'none',
    borderRadius: '15px',
    background: '#EBE8E1',
    marginLeft: '70%',
  },
  card: {
    maxWidth: 500,
    borderRadius: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  borderRadius: {
    borderRadius: "15px",
  },
  titleOrInstructorFields: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '45%',
    backgroundColor: '#F4F8FA',
    filter: "brightness(107%)"
  
  },
  descriptionField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '93%',
    height: '150px',
    backgroundColor: '#F4F8FA',
    filter: "brightness(107%)"
  },
  blackUnderline: {
    '&:after': {
      borderBottom: 'black solid 2px',
      color: 'black',
    },
  },
  courseUrlField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '93%',
    backgroundColor: '#F4F8FA',
    filter: "brightness(107%)"
  }
}));

const labelStyle = {
    color: 'black'
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'gray',
    },
  },
})(TextField);

export default function AddCourse() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    foreign_instructors: "",
    link: "",
    description: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Course Overview
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
            <CssTextField
                id="standard-name"
                label='Name'
                className={classes.titleOrInstructorFields}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="filled"
                style={{onFocus: labelStyle}}
                InputProps={{ classes: { underline: classes.blackUnderline } }}
                // InputLabelProps={{ classes: {focused: classes.label}}}
                // onFocus={style={labelStyle}}
            />
            <CssTextField
                id="standard-name"
                label="Instructors"
                className={classes.titleOrInstructorFields}
                value={values.foreign_instructors}
                onChange={handleChange('foreign_instructors')}
                margin="normal"
                variant="filled"
                InputProps={{ classes: { underline: classes.blackUnderline } }}
            />
            <CssTextField
                id="standard-name"
                label="Description"
                className={classes.descriptionField}
                value={values.description}
                onChange={handleChange('description')}
                margin="normal"
                multiline
                rows='6'
                variant="filled" 
                InputProps={{ classes: { underline: classes.blackUnderline } }}
            />
            <CssTextField
                id="standard-name"
                label="Course Url"
                className={classes.courseUrlField}
                value={values.link}
                onChange={handleChange('link')}
                margin="normal"
                variant="filled"
                InputProps={{ classes: { underline: classes.blackUnderline } }}
            />
        </form>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" className={classes.button} >Add Course</Button>
      </CardActions>
    </Card>
  );
}