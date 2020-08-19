import {applyMiddleware, createStore, Store} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

export function configureStore(): Store {
    return createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
}