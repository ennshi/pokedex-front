import React, {useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import { GiBigEgg } from 'react-icons/gi';

const Image = ({ src, alt, styling, width, height }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [error, setError] = useState(false);
    const isLoaded = () => {
        setImgLoaded(true);
    };
    const notLoaded = () => {
        setError(true);
    };
    return (
        <>
            {!imgLoaded && !error && <Skeleton width={width} height={height} />}
            {error && <GiBigEgg className={styling} style={{color: '#c4c4c4'}} aria-label="egg image"/>}
            <img
                src={src}
                onLoad={isLoaded}
                onError={notLoaded}
                alt={alt}
                className={(imgLoaded && !error) ? styling : `hidden`}
            />
        </>
    )
};

export default Image;
