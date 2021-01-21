import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home/Home';
import Likes from './components/likes/Likes/Likes';
import Navbar from './components/main-layout/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <main>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/likes" component={ Likes } />
                    <Route component={ NotFound } />
                </Switch>
            </Router>
        </main>
    );
};

export default App;
