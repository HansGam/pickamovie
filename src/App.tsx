import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./Header/Header";
import About from "./About/About";
import Home from "./Home/Home";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home title="Home"/>
                </Route>
                <Route exact path="/about">
                    <About title="About"/>
                </Route>
            </Switch>
        </Router>
    )
        ;
}

export default App;
