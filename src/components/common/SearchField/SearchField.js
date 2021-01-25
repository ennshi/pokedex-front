import React from 'react';
import './SearchField.css';

const SearchField = ({ placeholder, handleChange, handleKeyDown, name, inputType, min }) => {
    return (
        <div className="search-field__container">
            <input
                type={inputType}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                name={name}
                className="search-field__input"
                min={inputType === 'number' ? min : ''}
            />
        </div>
    );
};

export default SearchField;
