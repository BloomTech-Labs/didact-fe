import axios from 'axios';

export const testEndpoint = form => dispatch => {
    dispatch({type: 'TEST-DATA'})
    axios.get(``)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}