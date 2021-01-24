import React, {useEffect, useState} from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';
import InfiniteScrollList from '../../common/InfiniteScrollList';
import {LIMIT_POKEMONS, POKEMONS_URL} from '../../constants/FetchData';

const Home = () => {
    const [search, setSearch] = useState(null);
    const [pokemons, setPokemons] = useState([]);
    const [errors, setErrors] = useState(null);
    const [urlToFetch, setUrlToFetch] = useState(POKEMONS_URL);
    useEffect(() => {
        if(search?.value) {
            setErrors(null);
            setPokemons([]);
            setUrlToFetch(`${POKEMONS_URL}?filter=${search.property}::${search.value}`);
            return;
        }
        setErrors(null);
        setPokemons([]);
        setUrlToFetch(POKEMONS_URL);
    }, [search]);
    return (
        <section>
            <SearchBar setSearch={setSearch}/>
            {((!errors && urlToFetch) &&
                <InfiniteScrollList
                    url={urlToFetch}
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
