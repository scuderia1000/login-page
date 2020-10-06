import fetch from 'cross-fetch';
import {LoginResponseState} from "../store/login/types";
import {HttpResponse} from "./types";

export async function http<T>(url: RequestInfo, request: RequestInit): Promise<HttpResponse<T>> {
    let response: HttpResponse<T> = new Response();
    try {
        response = await fetch(url, request);

        if (!response.ok) {
            // TODO убрать, когда сделаю централизованный перехват ошибок
            console.error('Response status error:', response.statusText);
            throw new Error(response.statusText);
        }

        response.parsedBody = await response.json();
    } catch (error) {
        // TODO убрать, когда сделаю централизованный перехват ошибок
        console.error('Http error: ', error);
        throw new Error(error);
    }

    return response;
}

export async function post<T>(
    url: string,
    body: any,
    args: RequestInit = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
    return await http<T>(url, args);
}

export const hasError = (response: HttpResponse<any>): boolean => !!response && response.hasOwnProperty("error");

export const hasLoginError = (response: HttpResponse<LoginResponseState>): boolean =>
    !!response && !!response.parsedBody && response.parsedBody.hasOwnProperty("errors");