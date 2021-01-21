import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import ShadowButton from '../../common/ShadowButton/ShadowButton';

const Navbar = () => {
    const history = useHistory();
    const [curPath, setCurPath] = useState(history.location.pathname);
    const redirectTo = (path) => {
        history.push(path);
        setCurPath(path);
    };
    return (
        <nav>
            <ShadowButton text="Pokedex" onClick={() => redirectTo('/')} disabled={curPath === '/'} />
            <ShadowButton text="Likes" onClick={() => redirectTo('/likes')} disabled={curPath === '/likes'} />
        </nav>
    );
};

export default Navbar;
