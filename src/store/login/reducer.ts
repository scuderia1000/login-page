import {LoginActionTypes, LoginState, SEND_LOGIN_REQUEST} from "./types";

const initialState: LoginState = {
    user: undefined
};

export function loginReducer(state = initialState, action: LoginActionTypes): LoginState {
    switch (action.type) {
        case SEND_LOGIN_REQUEST:
            return {
                user: {
                    ...state.user,

                }
            }
    }
}