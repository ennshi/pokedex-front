import React, {useContext} from 'react';
import './LikeButton.css';
import { AiOutlineLike } from "react-icons/ai";
import {LikedPokemonsContext} from '../../../contexts/LikedPokemonsContext';

const LikeButton = ({ pokemonId }) => {
    const { likedPokemonsIds, addToLikedIds, removeFromLikedIds } = useContext(LikedPokemonsContext);
    const handleClick = () => {
        if(likedPokemonsIds.includes(pokemonId)) {
            return removeFromLikedIds(pokemonId);
        }
        addToLikedIds(pokemonId);
    };
    return (
        <button
            className={(likedPokemonsIds.includes(pokemonId) ?
                'btn-like btn-like--active' :
                'btn-like btn-like--default'
            )}
            onClick={ handleClick }
        >
            <AiOutlineLike className="btn-like__icon" />
        </button>
    );
};

export default LikeButton;
