import React from 'react';
import './SearchField.css';

const SearchField = ({ placeholder, handleChange, handleKeyDown, name }) => {
    const onChange = ({target}) => {
        handleChange({
            property: target.name,
            value: target.value
        });
    };
    const onKeyDown = ({target, code}) => {
        handleKeyDown(code, {
            property: target.name,
            value: target.value
        });
    };
    return (
        <div className="search-field__container">
            <input
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
                name={name}
                className="search-field__input"
            />
        </div>
    );
};

export default SearchField;
