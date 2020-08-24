import fetch from 'cross-fetch'
import {ErrorResponse, LoginResponse} from "../store/login/types";

export async function post<T>(url: string, data: object): Promise<T> {
    const response =  await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

export const hasLoginError = (response: LoginResponse | ErrorResponse): boolean => response.hasOwnProperty("errors");