import React from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <section>
            <SearchBar />
            <PokemonList />
        </section>
    );
};

export default Home;
