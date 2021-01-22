import React, {useState} from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';
import InfiniteScrollList from '../../common/InfiniteScrollList';
import {LIMIT_POKEMONS, POKEMONS_URL} from '../../constants/FetchData';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [errors, setErrors] = useState(null);
    return (
        <section>
            <SearchBar />
            {(!errors &&
                <InfiniteScrollList
                    url={POKEMONS_URL}
                    setItems={setPokemons}
                    setErrors={setErrors}
                    items={pokemons}
                    limitItems={LIMIT_POKEMONS}
                >
                    <PokemonList pokemons={pokemons}/>
                </InfiniteScrollList>
            )}
            {(errors && <h5>Some error</h5>)}
        </section>
    );
};

export default Home;
