import React from 'react';
import './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <button
                    onClick={onClose}
                    className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
