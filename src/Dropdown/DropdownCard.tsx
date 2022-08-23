import React from 'react';
import './Dropdown.css';

// define prop types 
type DropdownCardProps = {
    options: string[];
}

function DropdownCard({ options }: DropdownCardProps) {
    return (
        <ul id={`dropdown-${options[0]}`}>
            {options.map((name, i) => {
                return(
                    <li key={i}>
                        {name}
                    </li>
                )
            })}
        </ul>
    );
}

export default DropdownCard;