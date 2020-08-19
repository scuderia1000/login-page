import {LoginActionTypes, LoginRequest, LoginResponse, RECEIVE_LOGIN_RESPONSE, SEND_LOGIN_REQUEST} from "./types";


export function sendLoginRequest(request: LoginRequest): LoginActionTypes {
    return {
        type: SEND_LOGIN_REQUEST,
        payload: request
    }
}

export function receiveLoginResponse(response: LoginResponse): LoginActionTypes {
    return {
        type: RECEIVE_LOGIN_RESPONSE,
        payload: response
    }
}