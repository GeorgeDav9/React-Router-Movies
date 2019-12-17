import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);  