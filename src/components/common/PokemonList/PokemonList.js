import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
    return (
        <>
            {!pokemons.length ?
                <section>
                    PokemonList
                </section> :
                <section className="pokemon-list__container">
                    {pokemons.map((p, i) => <PokemonCard pokemon={p} key={i}/>)}
                </section>
            }
        </>

    );
};

export default PokemonList;
