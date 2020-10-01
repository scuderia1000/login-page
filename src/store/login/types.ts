import {Action} from "redux";
import {RootState} from "../rootReducer";
import {ThunkAction} from "redux-thunk";

export enum REQUEST_STATUS {
    PENDING,
    COMPLETE,
    ERROR
}

export interface User {
    id: number,
    name: string,
    age: number
}

export interface LoginRequest {
    login: string,
    password: string
}

export interface LoginResponse {
    data?: User,
    errors?: string[]
}

export interface Error {
    error: string[]
}

export interface LoginState {
    user: User | undefined,
    errors: string[] | undefined
    requestStatus: REQUEST_STATUS
}



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, string, Action<string>>;