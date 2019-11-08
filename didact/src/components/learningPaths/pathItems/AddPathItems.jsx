import React, { useState } from 'react';
import { postPathItem } from '../../../store/actions';
import { useDispatch } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { DidactField, DidactInput, DidactLabel, DidactTextArea } from '../../dashboard/FormStyles'

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

const AddPathItems = ({ props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    link: "",
    type: "",
    description: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(postPathItem(props.match.params.id, values, props.history));
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Learning Path Item Overview
          </Typography>
        <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
          <DidactField>
            <DidactLabel for='title'>Item Name</DidactLabel>
            <DidactInput id='title' type='text' value={values.name || ""} onChange={handleChange('name')} placeholder='Item Name' />
          </DidactField>
          <DidactField>
            <DidactLabel for='description'>Description</DidactLabel>
            <DidactTextArea rows="8" id='description' value={values.description || ""} onChange={handleChange('description')} placeholder='Description' />
          </DidactField>
          <DidactField>
            <DidactLabel for='link'>Url Link</DidactLabel>
            <DidactInput id='link' type='text' value={values.link || ""} onChange={handleChange('link')} placeholder='Url Link' />
          </DidactField>
          <DidactField>
            <DidactLabel for='type'>Type</DidactLabel>
            <DidactInput id='type' type='text' value={values.type || ""} onChange={handleChange('type')} placeholder='Type' />
          </DidactField>
          <Button type='submit' size="small" variant="contained" className={classes.button} >Create Item</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddPathItems;