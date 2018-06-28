/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./components/app/App";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";

render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/admin/posts" render={() => <p>Just render in router</p>}/>
            </Switch>
        </App>
    </Router>,
    document.getElementById('app'));
