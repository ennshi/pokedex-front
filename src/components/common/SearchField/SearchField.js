import React from 'react';

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
        <div>
            <input
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
                name={name}
            />
        </div>
    );
};

export default SearchField;
