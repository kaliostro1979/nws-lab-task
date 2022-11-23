import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./app/store";
import './styles/main.scss'
import {ContextProvider} from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </Provider>
);

