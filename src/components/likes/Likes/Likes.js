import React, {useState} from 'react';
import PokemonList from '../../common/PokemonList/PokemonList';
import InfiniteScrollList from '../../common/InfiniteScrollList';
import {LIKES_URL, LIMIT_POKEMONS} from '../../constants/FetchData';

const Likes = () => {
    const [likedPokemons, setLikedPokemons] = useState([]);
    const [errors, setErrors] = useState(null);
    return (
        <section>
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
