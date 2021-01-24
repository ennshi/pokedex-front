import React, {useContext} from 'react';
import {ModalContext} from '../../../contexts/ModalContext';
import {PokemonDetailsContext} from '../../../contexts/PokemonDetailsContext';
import './PokemonCard.css';
import Image from '../Image/Image';
import Chip from '../Chip/Chip';
import {TYPES_STYLING} from '../../constants/colors';
import LikeButton from '../LikeButton/LikeButton';

const PokemonCard = ({ pokemon }) => {
    const { toggleShowModal } = useContext(ModalContext);
    const { setPokemonDetailsId } = useContext(PokemonDetailsContext);
    const handleClick = () => {
        setPokemonDetailsId(pokemon.id);
        toggleShowModal();
    };
    return (
        <article className="pokemon-card__container">
            <div className="pokemon-card__media" onClick={handleClick}>
                <Image
                    src={pokemon.img}
                    alt={pokemon.name}
                    width={'126px'}
                    height={'117px'}
                    styling={'pokemon-card__img'}
                />
            </div>
            <div className="pokemon-card__body">
                <p className="pokemon-card__title">
                    <span className="pokemon-card__id">{pokemon.id}</span>
                    {pokemon.name}
                </p>
                <div className="pokemon-card__type-block">
                    {
                        pokemon.type.map((t, i) => <Chip
                            key={i}
                            text={t}
                            bgColor={TYPES_STYLING[t]}
                        />)
                    }
                </div>
                <div className="pokemon-card__like">
                    <LikeButton />
                </div>
            </div>
        </article>
    );
};

export default PokemonCard;
