import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../common/modal/Backdrop';
import Modal from '../common/modal/Modal';
import fetchData from '../../helpers/fetchData';
import {PokemonDetailsContext} from '../../contexts/PokemonDetailsContext';
import {POKEMON_URL} from '../constants/FetchData';
import './PokemonDetails.css';
import Image from '../common/Image/Image';
import ChipIcon from '../common/Chip/ChipIcon';
import { GiHealthNormal, GiBroadsword, GiCheckedShield } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
import {BG_COLORS, TYPES_STYLING} from '../constants/colors';
import Chip from '../common/Chip/Chip';
import LikeButton from '../common/LikeButton/LikeButton';
import Error from '../common/Error/Error';

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
                <section className="pokemon-details__container">
                    <h1 className="pokemon-details__header">
                        <span className="pokemon-details__id">{pokemon.id}</span>
                        {pokemon.name}
                    </h1>
                    <div className="pokemon-details__block">
                        <Image
                            src={pokemon.img}
                            alt={pokemon.name}
                            height="200px"
                            width="200px"
                            styling="pokemon-details__img"
                        />
                        <div className="pokemon-details__info">
                            <p className="pokemon-details__info-item">
                                height
                                <span>
                                    {pokemon.misc.height}
                                </span>
                            </p>
                            <p className="pokemon-details__info-item">
                                weight
                                <span>
                                    {pokemon.misc.weight}<span style={{textTransform: 'lowercase'}}>lbs</span>
                                </span>
                            </p>
                            <p className="pokemon-details__info-item">
                                happiness
                                <span>
                                    {pokemon.misc.happiness}
                                </span>
                            </p>
                            <p className="pokemon-details__info-item">
                                classification
                                <span>
                                    {pokemon.misc.classification.split(' ')[0]}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="pokemon-details__block">
                        <div className="pokemon-details__stats">
                            <div className="pokemon-details__stats-item">
                                <ChipIcon bgColor={BG_COLORS.green}>
                                    <GiHealthNormal />
                                </ChipIcon>
                                {pokemon.stats.hp}
                            </div>
                            <div className="pokemon-details__stats-item">
                                <ChipIcon bgColor={BG_COLORS.red}>
                                    <GiBroadsword />
                                </ChipIcon>
                                {pokemon.stats.attack} / sp. {pokemon.stats.spattack}
                            </div>
                            <div className="pokemon-details__stats-item">
                                <ChipIcon bgColor={BG_COLORS.blue}>
                                    <GiCheckedShield />
                                </ChipIcon>
                                {pokemon.stats.defense} / sp. {pokemon.stats.spdefense}
                            </div>
                            <div className="pokemon-details__stats-item">
                                <ChipIcon bgColor={BG_COLORS.yellow}>
                                    <RiSpeedFill />
                                </ChipIcon>
                                {pokemon.stats.speed}
                            </div>
                        </div>
                        <div className="pokemon-details__types">
                            <h2 className="pokemon-details__type-header">TYPES</h2>
                            {pokemon.type.map((t, i) => (
                                <Chip
                                    bgColor={TYPES_STYLING[t]}
                                    text={t}
                                    key={i}
                                />)
                            )}
                            <h2 className="pokemon-details__type-header">ABILITIES</h2>
                            {pokemon.misc.abilities.normal.map((a, i) => (
                                <p
                                    className="pokemon-details__ability-item"
                                    key={i}
                                >
                                    {a}
                                </p>
                            ))}
                            {pokemon.misc.abilities.hidden.map((a, i) => (
                                <p
                                    className="pokemon-details__ability-item--hidden"
                                    key={i}
                                >
                                    {a}
                                </p>
                            ))}
                        </div>
                        <div className="pokemon-details__like">
                            <LikeButton pokemonId={pokemon.id} />
                        </div>
                    </div>
                </section>
                }
                {loading &&
                <section className="pokemon-details__container">
                    loading...
                </section>
                }
                {errors &&
                <section className="pokemon-details__container">
                    <Error errors={errors} />
                </section>
                }
            </Modal>
        </Backdrop>,
        document.getElementById('modal-root')
    );
};

export default PokemonDetails;
