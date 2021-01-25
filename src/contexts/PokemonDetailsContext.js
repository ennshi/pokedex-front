import React, {useState} from 'react';

export const PokemonDetailsContext = React.createContext({});

export const PokemonDetailsContextProvider = ({children}) => {
    const [pokemonDetailsId, setPokemonDetailsId] = useState('');
    return (
        <PokemonDetailsContext.Provider value={{pokemonDetailsId, setPokemonDetailsId}}>
            {children}
        </PokemonDetailsContext.Provider>
    );
};
