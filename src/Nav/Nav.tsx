import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Nav.module.css';

function Nav() {

    const algos=["Dijkstra's Algorithm"];       // don't yet have these hooked up to the algorithms
  
    // return jsx with nav bar
    return (
      <nav>
        <h1>Pathfinder</h1>
        <Dropdown name="Algorithms" options={algos} />
      </nav>
    );
}

  
export default Nav;