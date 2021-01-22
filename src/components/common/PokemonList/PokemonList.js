import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = ({ pokemons }) => {
    return (
        <>
            {!pokemons.length ?
                <section>
                    PokemonList
                </section> :
                <section>
                    {pokemons.map((p, i) => <PokemonCard pokemon={p} key={i}/>)}
                </section>
            }
        </>

    );
};

export default PokemonList;
