import React from 'react';
import './FormInput.module.css';

const FormInput = ({ type = 'text', name, value, onChange, placeholder, className = '', required = false }) => {
    return (
        <div className="form-input mb-4">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
                required={required}
            />
        </div>
    );
};

export default FormInput;
