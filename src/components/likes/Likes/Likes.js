import React, {useContext, useEffect, useState} from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import InfiniteScrollList from '../../common/InfiniteScrollList';
import {LIKES_URL, LIMIT_POKEMONS} from '../../constants/urls';
import {LikedPokemonsContext} from '../../../contexts/LikedPokemonsContext';
import './Likes.css';
import Error from '../../common/Error/Error';

const Likes = () => {
    const { likedPokemonsIds } = useContext(LikedPokemonsContext);
    const [likedPokemons, setLikedPokemons] = useState(null);
    const [errors, setErrors] = useState(null);
    useEffect(() => {
        if(likedPokemons?.length) {
            setLikedPokemons(pokemons => pokemons.filter(pokemon => likedPokemonsIds.includes(pokemon.id)));
        }
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
                    {likedPokemons && <PokemonList pokemons={likedPokemons}/>}
                </InfiniteScrollList>
            )}
            {(errors && <Error errors={errors} /> )}
        </section>
    );
};

export default Likes;
