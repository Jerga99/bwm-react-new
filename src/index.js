
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js'
import './index.css';

// const h2Element =  React.createElement('h2', null, 'What a nice day');
// const element = React.createElement('h1', {className: 'title'}, 'HelloWorld', h2Element);
const rootElement = document.getElementById('root');

// No Magic (:
ReactDOM.render(<App/>, rootElement);


