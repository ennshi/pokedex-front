import React from 'react';
import InputField from '../../common/InputField/InputField';
import {debouncer, cancelDebouncer} from '../../../helpers/debouncer';
import './SearchBar.css';
import SelectField from '../../common/SelectField/SelectField';
import {TYPE_OPTIONS} from '../../constants/selectOptions';

const SearchBar = ({setSearch}) => {
    const convertNumberInput = (property, value) => {
        return (property === 'id' && value) ? value.toString().padStart(3, '0') : value;
    };

    const searchOnChange = (search) => {
        debouncer(1700, () => setSearch(search));
    };
    const searchOnEnter = (key, search) => {
        if(key === 'Enter') {
            cancelDebouncer();
            setSearch(search);
        }
    };

    const handleChange = ({ target: { name, value }}) => {
        searchOnChange({
            property: name,
            value: convertNumberInput(name, value)
        });
    };
    const handleKeyDown = ({ target: {name, value}, code }) => {
        searchOnEnter(code, {
            property: name,
            value: convertNumberInput(name, value)
        });
    };

    return (
        <section className="searchbar__container">
            <InputField
                placeholder="Search ..."
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                name="name"
                inputType="text"
                classNames="input-field__element"
            />
            <InputField
                placeholder="Number"
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                name="id"
                inputType="number"
                min="1"
                classNames="input-field__element"
            />
            <SelectField
                placeholder="Type"
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                name="type"
                options={TYPE_OPTIONS}
                classNames="input-field__element"
            />
        </section>
    );
};

export default SearchBar;
