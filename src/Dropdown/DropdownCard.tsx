import React from 'react';
import styles from './DropdownCard.module.css';

// define prop types 
type DropdownCardProps = {
    options: string[];
}

function DropdownCard({ options }: DropdownCardProps) {
    return (
        <ul id={`dropdown-${options[0]}`} style={styles}>
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