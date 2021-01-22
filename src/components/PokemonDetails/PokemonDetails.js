import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../common/modal/Backdrop';
import Modal from '../common/modal/Modal';
import fetchData from '../../helpers/fetchData';
import {PokemonDetailsContext} from '../../contexts/PokemonDetailsContext';
import {POKEMON_URL} from '../constants/FetchData';

const PokemonDetails = () => {
    const { pokemonDetailsId } = useContext(PokemonDetailsContext);
    const [pokemon, setPokemon] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const cancelFetch = useRef(false);
    const fetchPokemon = async () => {
        setLoading(true);
        const fetchedData = await fetchData({
            url: `${POKEMON_URL}/${pokemonDetailsId}`,
            method: 'GET'
        });
        if (!cancelFetch.current) {
            setLoading(false);
            if (!fetchedData.errors.length) {
                return setPokemon(fetchedData.response.data);
            }
            setErrors(fetchedData.errors);
        }
    };
    useEffect(() => {
        fetchPokemon();
        return () => (cancelFetch.current = true);
    }, []);
    return ReactDOM.createPortal(
        <Backdrop>
            <Modal>
                {pokemon &&
                <section>
                    {pokemon.name}
                </section>
                }
                {loading &&
                    <section>
                        loading...
                    </section>
                }
                {errors &&
                    <section>
                        Some error
                    </section>
                }
            </Modal>
        </Backdrop>,
        document.getElementById('modal-root')
    );
};

export default PokemonDetails;
