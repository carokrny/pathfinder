import React from 'react';
import GridWrapper from '../Grid/GridWrapper';
import Nav from '../Nav';
import Legend from '../Legend';
import './App.css';

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
