import React, {useContext} from 'react';
import {ModalContext} from '../../../contexts/ModalContext';
import {PokemonDetailsContext} from '../../../contexts/PokemonDetailsContext';

const PokemonCard = ({ pokemon }) => {
    const { toggleShowModal } = useContext(ModalContext);
    const { setPokemonDetailsId } = useContext(PokemonDetailsContext);
    const handleClick = () => {
        setPokemonDetailsId(pokemon.id);
        toggleShowModal();
    };
    return (
        <article onClick={ handleClick }>
            { pokemon.name }
        </article>
    );
};

export default PokemonCard;
