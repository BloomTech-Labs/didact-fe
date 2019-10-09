import axios from 'axios';

export const testEndPoint = form = dispatch => {
    dispatch({type: 'TEST_DATA_START'})
    axios.get(``)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}