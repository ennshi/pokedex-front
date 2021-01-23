import React from 'react';
import './ShadowButton.css';

const ShadowButton = ({ text, onClick, disabled }) => {
    return (
        <button
            onClick={ onClick }
            disabled={ disabled }
            className="btn-shadow"
        >
            { text.toUpperCase() }
        </button>
    );
};

export default ShadowButton;
