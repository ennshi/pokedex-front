import React from 'react';

const InputField = ({ placeholder, handleChange, handleKeyDown, name, inputType, min, classNames }) => {
    return (
        <div className="input-field__container">
            <input
                type={inputType}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                name={name}
                className={classNames}
                min={inputType === 'number' ? min : ''}
            />
        </div>
    );
};

export default InputField;
