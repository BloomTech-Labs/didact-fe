import React from 'react';

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//Styled Component Imports
import { DidactField, DidactInput, DidactLabel, FormTitle } from '../dashboard/FormStyles'
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
  const classes = useStyles();

  const handleChange = name => event => {
    props.setValues({ ...props.values, [name]: event.target.value });
  };

  return (
    <>
    <Card className={classes.card}>
      <CardContent>
        <form onSubmit={props.handleSubmitUdemy} className={classes.container} noValidate autoComplete="off">
          <FormTitle>Check Database For Course</FormTitle>
          <DidactField>
            <DidactLabel htmlFor='url'>Course Url</DidactLabel>
            <DidactInput id='url' type='text' value={props.values.link || ""} onChange={handleChange('link')} placeholder='Course Url' />
          </DidactField>
          <DidactButton type='submit' style={{ marginLeft: '72%' }}>Add Course</DidactButton>
        </form>
      </CardContent>
    </Card>
    </>
  );
}