import {LoginActionTypes, LoginRequest, SEND_LOGIN_REQUEST} from "./types";


export function sendLoginRequest(request: LoginRequest): LoginActionTypes {
    return {
        type: SEND_LOGIN_REQUEST,
        payload: request
    }
}