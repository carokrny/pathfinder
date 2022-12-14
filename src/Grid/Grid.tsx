import React from 'react';
import styles from './Grid.module.css';

type GridProps = {
  rows: number;
  cols: number;
}

function Grid({ rows, cols }: GridProps) {

  // placeholder for data of whick squares are walls, etc.
  const data: any[][] = [];
  for(let i = 0; i<rows; i++) {
    let temp: any[] = [];
    for(let j = 0; j<cols; j++) {
      temp.push(0);
    }
    data.push(temp);
  }


  // return jsx with grid
  return (
    <div className={styles.grid}>
      <table> 
        <tbody>
        {data.map((currentRow, r) => {
          return (
            <tr id={`row${r}`} key={`row${r}`}>
              {currentRow.map((item, c) => {
                return (
                  <td 
                    className={`${styles.block} ${styles.empty}`} 
                    id={`${r}-${c}`} 
                    key={`${r}-${c}`}>
                  </td>
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

export default Grid;