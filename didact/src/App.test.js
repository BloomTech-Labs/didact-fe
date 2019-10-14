import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {render, waitForDomChange, wait, getByText} from '@testing-library/react';

// TODO figure out this asyc test
// https://medium.com/@dev.adrieltosi/testing-async-redux-actions-moxios-redux-mock-store-ee03abd04f1b
// https://github.com/dmitry-zaets/redux-mock-store
// 'moxios' and 'redux-mock-store' possible dependancies needed

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
