import React from 'react';
import SearchField from '../../common/SearchField/SearchField';
import {debouncer, cancelDebouncer} from '../../../helpers/debouncer';
import './SearchBar.css';

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
            <SearchField
                placeholder="Search ..."
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                name="name"
                inputType="text"
            />
            <SearchField
                placeholder="Number"
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                name="id"
                inputType="number"
                min="1"
            />
            <SearchField
                placeholder="Type"
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                name="type"
            />
        </section>
    );
};

export default SearchBar;
