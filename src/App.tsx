import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./Header/Header";
import Page from "./Page/Page";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Page title="Home"/>
                </Route>
                <Route exact path="/about">
                    <Page title="About"/>
                </Route>
            </Switch>
        </Router>
    )
        ;
}

export default App;
