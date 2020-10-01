export interface HttpResponse<T> extends Response {
    parsedBody?: T;
    error?: string[]
}