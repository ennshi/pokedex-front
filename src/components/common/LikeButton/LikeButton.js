import React from 'react';
import './LikeButton.css';
import { AiOutlineLike } from "react-icons/ai";

const LikeButton = ({ handleClick }) => {
    return (
        <button
            className="btn-like"
            onClick={handleClick}
        >
            <AiOutlineLike className="btn-like__icon" />
        </button>
    );
};

export default LikeButton;
