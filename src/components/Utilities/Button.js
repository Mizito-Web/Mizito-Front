import React from 'react';
import './Button.module.css';

const Button = ({ type = 'button', onClick, children, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-6 rounded-lg text-white bg-orange-500 hover:bg-orange-600 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
