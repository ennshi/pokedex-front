import React from 'react';

const Chip = ({ text, bgColor }) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: '#fff',
                width: '52px',
                height: '12px',
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '8px',
                lineHeight: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.04rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '3px',
            }}
        >
            { text }
        </div>
    );
};

export default Chip;
