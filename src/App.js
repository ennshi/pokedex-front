import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home/Home';
import Likes from './components/likes/Likes/Likes';
import Navbar from './components/main-layout/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import {ModalContext} from './contexts/ModalContext';
import './App.css';

const App = () => {
    const { showModal } = useContext(ModalContext);
    return (
        <main className="app__container">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/liked" component={ Likes } />
                    <Route component={ NotFound } />
                </Switch>
            </Router>
            { showModal && <PokemonDetails /> }
        </main>
    );
};

export default App;
