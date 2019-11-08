import React, { useState } from 'react';
import { postLearningPath } from '../../store/actions';
import { useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { DidactField, DidactInput, DidactLabel, DidactTextArea, FormTitle } from '../dashboard/FormStyles'
import { DidactButton } from '../dashboard/ButtonStyles'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 540,
    borderRadius: 15,
    boxShadow: 'none'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const AddLearningPaths = ({ props }) => {
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
        <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
          <FormTitle>Learning Path Overview</FormTitle>
          <DidactField>
            <DidactLabel for='title'>Title</DidactLabel>
            <DidactInput id='title' type='text' value={values.name || ""} onChange={handleChange('name')} placeholder='Learning Path Title' />
          </DidactField>
          <DidactField>
            <DidactLabel for='description'>Description</DidactLabel>
            <DidactTextArea id='description' value={values.description || ""} onChange={handleChange('description')} placeholder='Description' rows="8" />
          </DidactField>
          <DidactField>
            <DidactLabel for='category'>Category</DidactLabel>
            <DidactInput id='category' type='text' value={values.category || ""} onChange={handleChange('category')} placeholder='Category' />
          </DidactField>
          <DidactButton style={{ marginLeft: '72%' }} type='submit'>Create Path</DidactButton>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddLearningPaths;