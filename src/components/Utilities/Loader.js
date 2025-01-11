import React from 'react';
import './Loader.module.css';

const Loader = () => {
    return (
        <div className="loader flex justify-center items-center">
            <div className="spinner-border animate-spin border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>
        </div>
    );
};

export default Loader;
