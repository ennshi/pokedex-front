import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import ShadowButton from '../../common/ShadowButton/ShadowButton';
import './Navbar.css';

const Navbar = () => {
    const history = useHistory();
    const [curPath, setCurPath] = useState(history.location.pathname);
    const redirectTo = (path) => {
        history.push(path);
        setCurPath(path);
    };
    return (
        <nav className="navbar__container">
            <ShadowButton text="Pokedex" onClick={() => redirectTo('/')} disabled={curPath === '/'} />
            <ShadowButton text="Liked" onClick={() => redirectTo('/liked')} disabled={curPath === '/liked'} />
        </nav>
    );
};

export default Navbar;
