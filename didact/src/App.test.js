import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {render, waitForDomChange} from '@testing-library/react';


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('renders Hello World', () => {
  //   const app = render(<Router><App /></Router>);

  //   app.getByText(/App/i)
  
  // });
  it('renders a course', () => {
    // const container = document.createElement('div')
    const container = render(<Router><App /></Router>);
  waitForDomChange({ container })
    .then(() => container.getByText(/Learning how to learn/i))
    .catch(err => console.log(`Error you need to deal with: ${err}`))
  // container.append(document.createElement('p'))
// if 👆 was the only code affecting the container and it was not run,
// waitForDomChange would throw an error
  })
})
