import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import {config} from "./State/overmind";

const root = ReactDOM.createRoot(document.getElementById('root'));

const overmind = createOvermind(config)

root.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
