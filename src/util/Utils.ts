import fetch from 'cross-fetch'
import {ErrorResponse, LoginResponse} from "../store/login/types";
import {HttpResponse} from "./types";

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request);
debugger
    try {
        response.parsedBody = await response.json();
    } catch (e) {
        // TODO убрать, когда сделаю централизованный перехват ошибок
        console.error('Response has no body');
        response.errors = ['Response has no body'];
        // throw new Error('Response has no body');
    }

    if (!response.ok) {
        // TODO убрать, когда сделаю централизованный перехват ошибок
        console.error('Http error', response.statusText);
        // throw new Error(response.statusText);
    }

    return response;
}

export async function post<T>(
    url: string,
    body: any,
    args: RequestInit = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(url, args));
}

export const hasLoginError = (response: HttpResponse<LoginResponse | ErrorResponse>): boolean => !!response && response.hasOwnProperty("errors");