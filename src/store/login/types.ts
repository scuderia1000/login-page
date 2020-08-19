export enum REQUEST_STATUS {
    PENDING,
    COMPLETE
}

export interface User {
    id: number,
    name: string,
    age: number
}

export interface Request {
    login: string,
    password: string
}

export interface Response {
    data: User
}

export interface ErrorResponse {
    errors: Array<string>
}

export interface LoginState {
    user: User | undefined,
    errors: ErrorResponse | undefined
    requestStatus: REQUEST_STATUS
}

interface Status {
    requestStatus: REQUEST_STATUS
}

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const RECEIVE_LOGIN_RESPONSE = "RECEIVE_LOGIN_RESPONSE";
export const RECEIVE_LOGIN_ERROR = "RECEIVE_LOGIN_ERROR";

interface SendLoginRequestAction {
    type: typeof SEND_LOGIN_REQUEST,
    payload: {
        loginData: Request,
        requestStatus: REQUEST_STATUS
    }
}

interface ReceiveLoginResponseAction {
    type: typeof RECEIVE_LOGIN_RESPONSE,
    payload: {
        user: User,
        requestStatus: REQUEST_STATUS
    }
}

interface ReceiveLoginErrorAction {
    type: typeof RECEIVE_LOGIN_ERROR,
    payload: Error | Status
}

export type LoginActionTypes = SendLoginRequestAction | ReceiveLoginResponseAction | ReceiveLoginErrorAction;