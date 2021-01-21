import React from 'react';

const ShadowButton = ({ text, onClick, disabled }) => {
    return (
        <button onClick={onClick}>
            { text }
        </button>
    );
};

export default ShadowButton;
