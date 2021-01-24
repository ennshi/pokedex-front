import React, {useEffect, useReducer} from 'react';
import fetchData from '../helpers/fetchData';
import {LIKED_POKEMON_IDS, LIKES_URL} from '../components/constants/FetchData';

export const LikedPokemonsContext = React.createContext({});

const LIKE_POKEMONS = {
    SET_LIKED_IDS: 'fetch_liked_ids',
    ADD_TO_LIKED_IDS: 'add_to_liked_ids',
    REMOVE_FROM_LIKED_IDS: 'remove_from_liked_ids',
    SET_ERROR: 'set_error'
};

const initialState = {
    liked_ids: [],
    error: null
};

function reducer(state, {type, payload}) {
    switch (type) {
        case LIKE_POKEMONS.SET_LIKED_IDS:
            return {...state, liked_ids: [...payload]};
        case LIKE_POKEMONS.ADD_TO_LIKED_IDS:
            return {...state, liked_ids: [...state.liked_ids, payload]};
        case LIKE_POKEMONS.REMOVE_FROM_LIKED_IDS:
            return {...state, liked_ids: state.liked_ids.filter(id => id !== payload)};
        case LIKE_POKEMONS.SET_ERROR:
            return {...state, error: payload};
        default:
            return state;
    }
}

export const LikedPokemonsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getLikedIds = async () => {
        const fetchedData = await fetchData({
            url: LIKED_POKEMON_IDS,
            method: 'GET'
        });
        if(!fetchedData.errors.length) {
            return dispatch({type: LIKE_POKEMONS.SET_LIKED_IDS, payload: fetchedData.response.data});
        }
        return dispatch({type: LIKE_POKEMONS.SET_ERROR, payload: fetchedData.errors})
    };
    const addToLikedIds = async (id) => {
        const addPokemon = await fetchData({
            url: LIKES_URL,
            method: 'POST',
            data: JSON.stringify({ 'pokemonId': id })
        });
        if(!addPokemon.errors.length) {
            return dispatch({type: LIKE_POKEMONS.ADD_TO_LIKED_IDS, payload: id});
        }
        return dispatch({type: LIKE_POKEMONS.SET_ERROR, payload: addPokemon.errors})
    };
    const removeFromLikedIds = async (id) => {
        const deletePokemon = await fetchData({
            url: `${LIKES_URL}/${id}`,
            method: 'DELETE',
        });
        if(!deletePokemon.errors.length) {
            return dispatch({type: LIKE_POKEMONS.REMOVE_FROM_LIKED_IDS, payload: id});
        }
        return dispatch({type: LIKE_POKEMONS.SET_ERROR, payload: deletePokemon.errors})
    };
    useEffect(() => {
        getLikedIds();
    }, []);
    return (
        <LikedPokemonsContext.Provider value={{likedPokemonsIds : state.liked_ids, addToLikedIds, removeFromLikedIds}}>
            {children}
        </LikedPokemonsContext.Provider>
    );
};

