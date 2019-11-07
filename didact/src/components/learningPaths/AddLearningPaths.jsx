import React, { useState } from 'react';
import { postLearningPath } from '../../store/actions';
import { useDispatch } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
    input: {
      backgroundColor: '#F4F8FA',
      filter: "brightness(95%)",
      borderRadius: 15,
      
    },
    inputDescription: {
      backgroundColor: '#F4F8FA',
      filter: "brightness(95%)",
      borderRadius: 15,
      margin: '-16px -10px -16px -10px',
      padding: '10px',
     
    },
    titleOrInstructorFields: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '45%',
      [`& fieldset`]: {
        borderRadius: 15,
      },
    },
    descriptionField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '93%',
      [`& fieldset`]: {
        borderRadius: 15,
        margin: "3px"
        
      },
    },

    courseUrlField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '93%',
      [`& fieldset`]: {
        borderRadius: 15,
      },
    }
  }));
  
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'gray',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gray',
        },
        '&:hover fieldset': {
          borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
          border: '1px solid gray',
        },
    
    },
  },
  })(TextField);

const AddLearningPaths = ({props}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
      name: "",
      category: "",
      description: "",
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      dispatch(postLearningPath(values, props.history));
    }
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}  gutterBottom>
            Learning Path Overview
          </Typography>
          <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
              <CssTextField
                  id="standard-name"
                  label='Learning Path Title'
                  className={classes.courseUrlField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
                  placeholder="Learning Path Title"
                  InputProps={{ classes: { underline: classes.blackUnderline, input: classes.input}}}
              />
              <CssTextField
                  id="standard-name"
                  label="Description"
                  className={classes.descriptionField}
                  value={values.description}
                  onChange={handleChange('description')}
                  margin="normal"
                  multiline={true}
                  rows='6'
                  variant="outlined"
                  placeholder="Description"
                  InputProps={{ classes: {underline: classes.blackUnderline, input: classes.inputDescription}}}
              />
              <CssTextField
                  id="standard-name"
                  label="Category"
                  className={classes.courseUrlField}
                  value={values.category || ""}
                  onChange={handleChange('category')}
                  margin="normal"
                  variant="outlined"
                  placeholder="Category"
                  InputProps={{ classes: { underline: classes.blackUnderline, input: classes.input } }}
              />
              <Button type='submit' size="small" variant="contained" className={classes.button} >Create Path</Button>
          </form>
        </CardContent>
      </Card>
    );
  }

export default AddLearningPaths;