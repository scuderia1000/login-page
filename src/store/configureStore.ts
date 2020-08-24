import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import {API_URL} from "../constants/AppConst";

export function configureStore(): Store {
    return createStore(rootReducer, {}, applyMiddleware(thunk.withExtraArgument(API_URL)));
}