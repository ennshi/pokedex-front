import React from 'react';

const ChipIcon = ({ children, bgColor }) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: '#fff',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                fontSize: '0.6rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5px',
                padding: '2px'
            }}
        >
            { children }
        </div>
    );
};

export default ChipIcon;
