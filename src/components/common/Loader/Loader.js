import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const Loader = () => {
    return (
        <section style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p style={{
                fontSize: '1.3rem',
                letterSpacing: '0.04rem',
                fontWeight: 'bold'
            }}>
                Loading
            </p>
            <SkeletonTheme color="#6e6e6e" highlightColor="#ababab">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '50px'
                }}>
                    <Skeleton circle={true} height={10} width={10} />
                    <Skeleton circle={true} height={10} width={10} />
                    <Skeleton circle={true} height={10} width={10} />
                </div>
            </SkeletonTheme>
        </section>
    );
};

export default Loader;
