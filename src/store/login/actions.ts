import {
    LoginRequest,
    LoginResponse,
    ErrorResponse,
    REQUEST_STATUS,
    AppThunk
} from "./types";
import {ACTIONS, LOGIN} from "../../constants/AppConst";
import {hasLoginError, post} from "../../util/Utils";
import {HttpResponse} from "../../util/types";

const sendLoginRequest = (request: LoginRequest) => ({
        type: ACTIONS.LOGIN.REQUEST,
        payload: {
            loginData: request,
            requestStatus: REQUEST_STATUS.PENDING
        }
} as const);

export function receiveLoginResponse(response: LoginResponse) {
    return {
        type: ACTIONS.LOGIN.RESPONSE,
        payload: {
            user: response.data,
            requestStatus: REQUEST_STATUS.COMPLETE
        }
    } as const
}

export function receiveLoginError(response: ErrorResponse) {
    return {
        type: ACTIONS.LOGIN.ERROR,
        payload: {
            errors: response.errors,
            requestStatus: REQUEST_STATUS.COMPLETE
        }
    } as const
}

export type LoginActionTypes = ReturnType<typeof sendLoginRequest> |  ReturnType<typeof receiveLoginResponse> |  ReturnType<typeof receiveLoginError>;

export const login = (loginData: LoginRequest): AppThunk => async (dispatch, getState, api) => {
    dispatch(sendLoginRequest(loginData));

    const response: HttpResponse<LoginResponse | ErrorResponse> = await  post<LoginResponse | ErrorResponse>(`${api}${LOGIN}`, loginData);
debugger
    if (hasLoginError(response)) {
        dispatch(receiveLoginError(response as ErrorResponse));
    } else {
        dispatch(receiveLoginResponse(response.parsedBody as LoginResponse));
    }

};