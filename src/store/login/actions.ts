import {
    LoginRequest,
    LoginResponse,
    ErrorResponse,
    LoginActionTypes,
    RECEIVE_LOGIN_ERROR,
    RECEIVE_LOGIN_RESPONSE,
    REQUEST_STATUS,
    SEND_LOGIN_REQUEST, AppThunk
} from "./types";
import {LOGIN} from "../../constants/AppConst";
import {hasLoginError, post} from "../../util/Util";

function sendLoginRequest(request: LoginRequest): LoginActionTypes {
    return {
        type: SEND_LOGIN_REQUEST,
        payload: {
            loginData: request,
            requestStatus: REQUEST_STATUS.PENDING
        }
    }
}

export function receiveLoginResponse(response: LoginResponse): LoginActionTypes {
    return {
        type: RECEIVE_LOGIN_RESPONSE,
        payload: {
            user: response.data,
            requestStatus: REQUEST_STATUS.COMPLETE
        }
    }
}

export function receiveLoginError(response: ErrorResponse): LoginActionTypes {
    return {
        type: RECEIVE_LOGIN_ERROR,
        payload: {
            ...response,
            requestStatus: REQUEST_STATUS.COMPLETE
        }
    }
}

export const login = (loginData: LoginRequest): AppThunk => async (dispatch, getState, api) => {
    dispatch(sendLoginRequest(loginData));

    const data = await post<LoginResponse | ErrorResponse>(api + LOGIN, loginData);

    if (hasLoginError(data)) {
        dispatch(receiveLoginError(data as ErrorResponse));
    } else {
        dispatch(receiveLoginResponse(data as LoginResponse));
    }

};