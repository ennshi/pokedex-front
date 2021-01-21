import React from 'react';
import SearchField from '../../common/SearchField/SearchField';

const SearchBar = () => {
    return (
        <section>
            <SearchField placeholder="Search ..." />
            <SearchField placeholder="Number" />
            <SearchField placeholder="Type" />
        </section>
    );
};

export default SearchBar;
