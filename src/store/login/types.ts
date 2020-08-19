export enum REQUEST_STATUS {
    PENDING,
    COMPLETE
}

export interface LoginRequest {
    login: string,
    password: string,
    requestStatus: REQUEST_STATUS.PENDING
}

export interface User {
    id: number,
    name: string,
    age: number
}

export interface LoginState {
    user: User | undefined,
    requestStatus: REQUEST_STATUS
}

export interface LoginResponse {
    data: User,
    requestStatus: REQUEST_STATUS.COMPLETE
}

export interface Errors {
    errors: Array<string>
}

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const RECEIVE_LOGIN_RESPONSE = "RECEIVE_LOGIN_RESPONSE";

interface SendLoginRequestAction {
    type: typeof SEND_LOGIN_REQUEST,
    payload: LoginRequest
}

interface ReceiveLoginResponseAction {
    type: typeof RECEIVE_LOGIN_RESPONSE,
    payload: LoginResponse
}

export type LoginActionTypes = SendLoginRequestAction | ReceiveLoginResponseAction;