import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <article>
            { pokemon.name }
        </article>
    );
};

export default PokemonCard;
