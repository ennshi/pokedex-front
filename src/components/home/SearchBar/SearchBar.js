import React from 'react';
import SearchField from '../../common/SearchField/SearchField';
import {debouncer, cancelDebouncer} from '../../../helpers/debouncer';

const SearchBar = ({setSearch}) => {
    const searchOnChange = (search) => {
        debouncer(1000, () => setSearch(search));
    };
    const searchOnEnter = (key, search) => {
        if(key === 'Enter') {
            cancelDebouncer();
            setSearch(search);
        }
    };
    return (
        <section>
            <SearchField
                placeholder="Search ..."
                handleChange={searchOnChange}
                handleKeyDown={searchOnEnter}
                name="name"
            />
            <SearchField
                placeholder="Number"
                handleChange={searchOnChange}
                handleKeyDown={searchOnEnter}
                name="id"
            />
            <SearchField
                placeholder="Type"
                handleChange={searchOnChange}
                handleKeyDown={searchOnEnter}
                name="type"
            />
        </section>
    );
};

export default SearchBar;
