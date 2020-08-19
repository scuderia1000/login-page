import {LoginActionTypes, LoginState, RECEIVE_LOGIN_RESPONSE, REQUEST_STATUS, SEND_LOGIN_REQUEST} from "./types";

const initialState: LoginState = {
    user: undefined,
    requestStatus: REQUEST_STATUS.COMPLETE
};

export function loginReducer(state = initialState, action: LoginActionTypes): LoginState {
    switch (action.type) {
        case SEND_LOGIN_REQUEST:
            return {
                ...state,
                requestStatus: action.payload.requestStatus
            };
        case RECEIVE_LOGIN_RESPONSE:
            return {
                ...state,
                user: action.payload.data,
                requestStatus: action.payload.requestStatus
            };
        default:
            return state;
    }
}