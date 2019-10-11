import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {render, waitForDomChange, wait, getByText} from '@testing-library/react';


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('renders a course', async () => {
  //   const container = render(<Router><App /></Router>);
  // waitForDomChange({ container })
  //   .then(() => console.log('dom change'))
  //   .catch(err => console.log(`Error you need to deal with: ${err}`))
  //   container.getByText(/Learning how to learn/i)
  // await wait(() =>
  // expect(getByText("Learning how to learn")).toBeInTheDocument()
  // );
  // })
})
