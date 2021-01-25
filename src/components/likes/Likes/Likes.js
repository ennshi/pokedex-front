import React, {useContext, useEffect, useState} from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import InfiniteScrollList from '../../common/InfiniteScrollList';
import {LIKES_URL, LIMIT_POKEMONS} from '../../constants/FetchData';
import {LikedPokemonsContext} from '../../../contexts/LikedPokemonsContext';
import './Likes.css';

const Likes = () => {
    const { likedPokemonsIds } = useContext(LikedPokemonsContext);
    const [likedPokemons, setLikedPokemons] = useState([]);
    const [errors, setErrors] = useState(null);
    useEffect(() => {
        setLikedPokemons(pokemons => pokemons.filter(pokemon => likedPokemonsIds.includes(pokemon.id)));
    }, [likedPokemonsIds]);
    return (
        <section className="likes__container">
            {(!errors &&
                <InfiniteScrollList
                    url={LIKES_URL}
                    setItems={setLikedPokemons}
                    setErrors={setErrors}
                    items={likedPokemons}
                    limitItems={LIMIT_POKEMONS}
                >
                    <PokemonList pokemons={likedPokemons}/>
                </InfiniteScrollList>
            )}
            {(errors && <h5>Some error</h5>)}
        </section>
    );
};

export default Likes;
