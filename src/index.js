//stap 1: react importeren
import React from "react";

//stap 2 react-dom importeren
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';


//stap 3 app importeren dit is onze app
import App from "./App";



//stap 4 app in browser laten zien
ReactDOM.render(<App />, document.getElementById('root'));
