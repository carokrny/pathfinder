import React from 'react';
import styles from './Button.module.css'

// define prop types 
type ButtonProps = {
    name: string;
    onClick: (input?: any) => void;
}

function Button ({ name, onClick }: ButtonProps) {
    return (
        <button 
            onClick={onClick} 
            type="button" 
            name={name}
            className={styles.button}
        >
            {name}
        </button>
    );
}

export default Button;