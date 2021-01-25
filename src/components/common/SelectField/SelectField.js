import React from 'react';

const SelectField = ({ name, options, classNames, handleKeyDown, handleChange, placeholder }) => {
    return (
        <select
            name={name}
            className={classNames}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            defaultValue=""
        >
            <option value="" disabled> { placeholder } </option>
            {options.length && options.map((op, i) => {
                return (
                    <option key={i} value={op.value}>
                        {op.label}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectField;
