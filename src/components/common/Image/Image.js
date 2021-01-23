import React, {useState} from 'react';
import Skeleton from 'react-loading-skeleton';

const Image = ({ src, alt, styling, width, height }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const isLoaded = () => {
        setImgLoaded(true);
    };
    return (
        <>
            {!imgLoaded && <Skeleton width={width} height={height} />}
            <img
                src={src}
                onLoad={isLoaded}
                alt={alt}
                className={imgLoaded ? styling : `${styling} hidden`}
            />
        </>
    )
};

export default Image;
