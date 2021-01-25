import React from 'react';

const NotFound = () => {
    return (
        <section>
            <p style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                letterSpacing: '0.04rem',
                textTransform: 'uppercase'
            }}>
                <span style={{
                    color: '#c4c4c4',
                    marginRight: '10px'
                }}>
                    404
                </span>
                Not Found
            </p>
        </section>
    );
};

export default NotFound;
