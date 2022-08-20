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
      temp.push(0);
    }
    data.push(temp);
  }


  // return jsx with grid
  return (
    <div id="grid">
      <table> 
        <tbody>
        {data.map((currentRow, r) => {
          return (
            <tr id={`row${r}`} key={`row${r}`}>
              {currentRow.map((item, c) => {
                return (
                  <td className="block empty" id={`${r}-${c}`} key={`${r}-${c}`}>{/*`${r}-${c}`*/}</td>
                )
            })}
            </tr>
          )
        })}
        </tbody>
      </table>
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

  const cols = Math.floor(app.clientWidth * .8 / blockSize); 
  const rows = Math.floor(app.clientHeight * .8 / blockSize);

  return { rows, cols };
}

export default Grid;