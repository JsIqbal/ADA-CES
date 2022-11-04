import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userReducer from './modules/features/user-reducer';
import App from './modules/core';

import('bootstrap/dist/css/bootstrap.min.css');
import('./style/index.css');
import('./style/dashboard.style.css');


const store = configureStore({
    reducer: {
        users: userReducer
    }
});

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
