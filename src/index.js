import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import listsData from './data/listsData';







ReactDOM.render( <App listsData={listsData} /> , document.querySelector('#root'));