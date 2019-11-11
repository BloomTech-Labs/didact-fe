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
import { DidactButton } from "../../dashboard/ButtonStyles";

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
  
}));



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
        <p className={classes.title} gutterBottom>
          Learning Path Item Overview
          </p>
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
          <DidactButton type='submit' size="small" variant="contained">Create Item</DidactButton>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddPathItems;