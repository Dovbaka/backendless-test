import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import './index.css';
import Backendless from 'backendless';
import { createStore } from './store'
const rootElement = document.getElementById('root');

Backendless.initApp("4D574777-E562-38E8-FF3E-EADE8E161100", "C9874BDD-18D0-4626-B439-2387B5798DEF");
ReactDOM.render(
    <Provider store={createStore()}>
        <App/>
    </Provider>,
    rootElement
)
reportWebVitals();
