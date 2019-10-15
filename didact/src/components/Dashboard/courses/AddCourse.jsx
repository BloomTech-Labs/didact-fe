import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
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
  titleOrInstructorFields: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '45%',
  },
  descriptionField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '93%',
    height: '150px', 
  },
  courseUrlField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '93%',
  }
}));

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
            <TextField
                id="standard-name"
                label="Name"
                className={classes.titleOrInstructorFields}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="standard-name"
                label="Instructors"
                className={classes.titleOrInstructorFields}
                value={values.name}
                onChange={handleChange('foreign_instructors')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="standard-name"
                label="Description"
                className={classes.descriptionField}
                value={values.name}
                onChange={handleChange('description')}
                margin="normal"
                variant="outlined" 
            />
            <TextField
                id="standard-name"
                label="Course Url"
                className={classes.courseUrlField}
                value={values.name}
                onChange={handleChange('link')}
                margin="normal"
                variant="outlined"
  
            />
        </form>
      </CardContent>
      <CardActions>
        <Button size="small">Add Course</Button>
      </CardActions>
    </Card>
  );
}