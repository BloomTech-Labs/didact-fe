import React, { useState } from 'react';
import { addCourse, addApiCourse, checkDatabase } from '../../store/actions';
import { useDispatch, useSelector } from "react-redux";
import { Mixpanel } from '../../utils/mixpanel';

//Material UI Imports
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//Styled Component Imports
import { DidactField, DidactInput, DidactLabel, DidactTextArea, FormTitle } from '../dashboard/FormStyles'
import { DidactButton } from '../dashboard/ButtonStyles'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 540,
    borderRadius: 15,
    boxShadow: 'none',
    marginLeft: "5px"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  span: {
    cursor: 'pointer',
    "&:hover":{
      color: 'white'
    }
  }
}));

export default function AddUdemyCourse(props) {
  const state = useSelector(state => state)
  const course = state.coursesReducer.courses
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [values, setValues] = useState({
  //   link: "",
  // });

  const handleBack = () => {
    props.history.push('/courses/yours')
    
}  

  const handleChange = name => event => {
    props.setValues({ ...props.values, [name]: event.target.value });
  };



  
  console.log(props.values.link)
  return (
    <>
    <Card className={classes.card}>
      <CardContent>
        <form onSubmit={props.handleSubmitUdemy} className={classes.container} noValidate autoComplete="off">
          <FormTitle>Check Database For Course</FormTitle>
          <DidactField>
            <DidactLabel for='url'>Course Url</DidactLabel>
            <DidactInput id='url' type='text' value={props.values.link || ""} onChange={handleChange('link')} placeholder='Course Url' />
          </DidactField>
          <DidactButton type='submit' style={{ marginLeft: '72%' }}>Add Course</DidactButton>
        </form>
      </CardContent>
    </Card>
    </>
  );
}