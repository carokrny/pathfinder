import React from 'react';
import GridWrapper from '../Grid/GridWrapper';
import Nav from '../Nav/Nav';
import Legend from '../Legend/Legend';
import './App.module.css';

function App() {
  return (
    <div className="App" id="app">
      <Nav/>
      <Legend/>
      <GridWrapper/>
    </div>
  );
}

export default App;
