import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./utils/Routes";
import { Mixpanel } from './utils/mixpanel';


function App() {
  return (
    <div className="App">
      <Routes />
      <button onClick={() => Mixpanel.track('test button')} > Mixpanel Test </button>
    </div>
  );
}

export default App;
