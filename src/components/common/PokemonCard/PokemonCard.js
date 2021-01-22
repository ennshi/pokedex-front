import React, {useContext} from 'react';
import {ModalContext} from '../../../contexts/ModalContext';

const PokemonCard = ({ pokemon }) => {
    const { toggleShowModal } = useContext(ModalContext);
    return (
        <article onClick={toggleShowModal}>
            { pokemon.name }
        </article>
    );
};

export default PokemonCard;
