import React, { useState, useEffect } from 'react';
import './Grid.css';

// arbitrary size of each block in grid
const blockSize = 25;

function Grid() {
  // use state hook to enable grid sizing based on window size
  // initially set to zero since useState runs before components mount
  const [size, setSize] = useState({cols: 0, rows: 0});

  // use effect hook to resize grid when window resizes
  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }

    // calling handleResize in useEffect to get around initial load error
    // since useEffect is called after all components mount. 
    handleResize();

    // add event listener
    window.addEventListener('resize', handleResize);

    return () => {
      // remove event listener
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // placeholder for data of whick squares are walls, etc.
  const data: any[][] = [];
  for(let i = 0; i<size.rows; i++) {
    let temp: any[] = [];
    for(let j = 0; j<size.cols; j++) {
      temp.push(false);
    }
    data.push(temp);
  }


  // return jsx with grid
  return (
    <div className="Grid">
      <h2> Rows: {size.rows} </h2>
      <h2> Cols: {size.cols} </h2>
    </div>
  );
}

/**
 * Helper function to get size of parent element
 */
function getSize(): {cols: number, rows: number} {
  const app = document.getElementById('app');

  if (!app) {
    return {cols: 0, rows: 0}
  }

  const cols = Math.floor(app.clientWidth / blockSize);
  const rows = Math.floor(app.clientHeight / blockSize);

  return { rows, cols };
}

export default Grid;