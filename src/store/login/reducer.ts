import {
    LoginState,
    REQUEST_STATUS
} from "./types";
import {LoginActionTypes} from "./actions";
import {ACTIONS} from "../../constants/AppConst";

const initialState: LoginState = {
    user: undefined,
    errors: undefined,
    requestStatus: REQUEST_STATUS.COMPLETE
};

export function loginReducer(state = initialState, action: LoginActionTypes): LoginState {
    switch (action.type) {
        case ACTIONS.LOGIN.REQUEST:
            return {
                ...state,
                requestStatus: action.payload.requestStatus
            };
        case ACTIONS.LOGIN.RESPONSE:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS.LOGIN.ERROR:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}