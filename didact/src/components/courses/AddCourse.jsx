import React, { useState } from 'react';
import { addCourse } from '../../store/actions';
import { useDispatch } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Mixpanel } from '../../utils/mixpanel';
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

export default function AddCourse({ props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    category: "",
    foreign_instructors: "",
    foreign_rating: "",
    link: "",
    description: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Mixpanel.track("Course Added.")
    dispatch(addCourse(values, props));
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
          <FormTitle>Course Overview</FormTitle>
          <DidactField>
            <DidactLabel for='title'>Course Name</DidactLabel>
            <DidactInput id='title' type='text' value={values.name || ""} onChange={handleChange('name')} placeholder='Course Name' />
          </DidactField>
          <DidactField>
            <DidactLabel for='instructors'>Instructors</DidactLabel>
            <DidactInput id='instructors' type='text' value={values.foreign_instructors || ""} onChange={handleChange('foreign_instructors')} placeholder='Instructors' />
          </DidactField>
          <DidactField>
            <DidactLabel for='description'>Description</DidactLabel>
            <DidactTextArea rows="8" id='description' value={values.description || ""} onChange={handleChange('description')} placeholder='Description' />
          </DidactField>
          <DidactField>
            <DidactLabel for='url'>Course Url</DidactLabel>
            <DidactInput id='url' type='text' value={values.link || ""} onChange={handleChange('link')} placeholder='Course Url' />
          </DidactField>
          <DidactField>
            <DidactLabel for='category'>Category</DidactLabel>
            <DidactInput id='category' type='text' value={values.category || ""} onChange={handleChange('category')} placeholder='Category' />
          </DidactField>
          <DidactButton type='submit' style={{ marginLeft: '72%' }}>Add Course</DidactButton>
        </form>
      </CardContent>
    </Card>
  );
}