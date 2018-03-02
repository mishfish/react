import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dropdown from "./Dropdown";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dropdown />, document.getElementById('drop'));

registerServiceWorker();
