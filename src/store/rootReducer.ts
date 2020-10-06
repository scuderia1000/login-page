import { combineReducers } from 'redux';
import * as loginSlice from "./login/slice";

const rootReducer = combineReducers({
    login: loginSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;