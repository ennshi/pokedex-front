import React from 'react';
import './InputField.css';

const InputField = ({ placeholder, handleChange, handleKeyDown, name, inputType, min }) => {
    return (
        <div className="input-field__container">
            <input
                type={inputType}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                name={name}
                className="input-field__element"
                min={inputType === 'number' ? min : ''}
            />
        </div>
    );
};

export default InputField;
