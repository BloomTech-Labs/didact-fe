import React from 'react';
import './App.css';
import Routes from "./utils/Routes";
// import Header from './components/headerAndFooter/Header'
import { Mixpanel } from './utils/mixpanel';
import HeaderSecondary from './components/headerAndFooter/Header(No Icons)';


function App() {
  return (
    <div className="App">
      <Routes />
      <HeaderSecondary />
      
      {/* <button onClick={() => Mixpanel.track('test button')} > Mixpanel Test </button> */}
    </div>
  );
}

export default App;
