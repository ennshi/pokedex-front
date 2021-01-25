import React from 'react';
import {BG_COLORS} from '../../constants/colors';

const Error = ({errors}) => {
    return (
        errors.map((error, i) => {
            return (
                <p
                    key={i}
                    style={{
                        color: BG_COLORS.red,
                        fontWeight: 'bold',
                        letterSpacing: '0.04rem'
                    }}
                >
                    {error}
                </p>
            );
        })
    );
};

export default Error;
