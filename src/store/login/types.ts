export interface LoginRequest {
    login: string,
    password: string
}

export interface User {
    id: number,
    name: string,
    age: number
}

export interface LoginState {
    user: User | undefined
}

export interface LoginResponse {
    data: User
}

export interface Errors {
    errors: Array<string>
}

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";

interface SendLoginRequestAction {
    type: typeof SEND_LOGIN_REQUEST,
    payload: LoginRequest
}

export type LoginActionTypes = SendLoginRequestAction;