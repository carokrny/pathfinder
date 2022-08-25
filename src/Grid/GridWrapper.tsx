import React, { useState, useEffect, useRef } from 'react';
import Grid from './Grid';
import './Grid.css';

// arbitrary size of each block in grid
const blockSize = 25;

function GridWrapper() {
    // use state hook to enable grid sizing based on window size
    // initially set to zero since useState runs before components mount
    const [size, setSize] = useState({cols: 0, rows: 0});

    const wrapper = useRef<HTMLDivElement>(null);

    // Helper function to get size of parent element
    function getSize(): {cols: number, rows: number} {
        if (!wrapper || !wrapper.current) return {cols: 0, rows: 0}

        // grab parent element from ref
        const parent = wrapper.current.parentElement;

        if (!parent) return {cols: 0, rows: 0}
    
        // arbitrarily make rows and cols cover 80% of parent element
        const cols = Math.floor(parent.clientWidth * .8 / blockSize); 
        const rows = Math.floor(parent.clientHeight * .8 / blockSize);
    
        return { rows, cols };
    }

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

    // return jsx with grid
    return (
        <div className="grid-wrapper" ref={wrapper}>
            <Grid rows={size.rows} cols={size.cols} />
        </div>
    );
}

export default GridWrapper;