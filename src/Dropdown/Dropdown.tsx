import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import DropdownCard from './DropdownCard';
import styles from './Dropdown.module.css';

// define prop types 
type DropdownProps = {
    name: string;
    options: string[];
}

function Dropdown({ name, options }: DropdownProps) {

    // keep track of state of whether Dropdown is open or not
    const [isOpen, setOpen] = useState<boolean>(false);

    // define id attribute to grab element by
    const id = `${name}-dropdown`;

    // helper function to handle clicking on button
    function handleButtonClick() {
        setOpen(!isOpen)
    }

    // helper function to close Dropdown when user clicks elsewhere on page
    function handlePageClick(e: MouseEvent) {
        if(isOpen &&                                    // check if Dropdown is open
            e.target instanceof HTMLElement &&          // type check
            !e.target.closest(`#${id}`)) {              // check that click is outside Dropdown

                setOpen(false);
        }
    }

    // add handlePageClick listeners to document
    useEffect(() => {
        document.addEventListener('click', handlePageClick);
        return () => {
            document.removeEventListener('click', handlePageClick);
        };   
    });

    return (
        <div 
            className={styles.dropdown} 
            id={id}
        > 
            <Button 
                name={`${name} `} 
                onClick={handleButtonClick} 
            />   
            {isOpen && <DropdownCard 
                options={options}
            />}
        </div>
    );
}

export default Dropdown