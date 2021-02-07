import React, {useEffect, useState} from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';
import InfiniteScrollList from '../../common/InfiniteScrollList';
import {LIMIT_POKEMONS, POKEMONS_URL} from '../../constants/urls';
import Error from '../../common/Error/Error';

const Home = () => {
    const [search, setSearch] = useState(null);
    const [pokemons, setPokemons] = useState(null);
    const [errors, setErrors] = useState(null);
    const [urlToFetch, setUrlToFetch] = useState(POKEMONS_URL);
    useEffect(() => {
        errors && setErrors(null);
        pokemons && setPokemons(null);
        if(search?.value) {
            setUrlToFetch(`${POKEMONS_URL}?filter=${search.property}::${search.value}`);
            return;
        }
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
                    {pokemons && <PokemonList pokemons={pokemons}/>}
                </InfiniteScrollList>
            )}
            {(errors && <Error errors={errors} /> )}
        </section>
    );
};

export default Home;
