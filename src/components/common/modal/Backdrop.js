import React from 'react';

const Backdrop = (props) => {
    return (
        <section style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            { props.children }
        </section>
    );
};

export default Backdrop;
