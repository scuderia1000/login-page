import {Action} from "redux";
import {RootState} from "../rootReducer";
import {ThunkAction} from "@reduxjs/toolkit";

export enum REQUEST_STATUS {
    PENDING = 'PENDING',
    COMPLETE = 'COMPLETE',
    ERROR = 'ERROR'
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

export interface LoginSuccessResponse {
    data: User
}

export interface LoginErrorResponse {
    errors: string[]
}

export type LoginResponseState =
    | LoginSuccessResponse
    | LoginErrorResponse;

export interface LoginState {
    user: User | undefined,
    errors: string[] | undefined
    requestStatus: REQUEST_STATUS
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, string, Action<string>>;