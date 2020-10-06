import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore, Store} from "@reduxjs/toolkit";
import rootReducer from "./store/rootReducer";
import {API_URL} from "./constants/AppConst";

const store: Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: API_URL,
            },
            serializableCheck: false,
        })
});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);