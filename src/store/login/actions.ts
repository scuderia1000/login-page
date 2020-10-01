import {
    LoginRequest,
    LoginResponse,
    REQUEST_STATUS,
    AppThunk
} from "./types";
import {ACTIONS, LOGIN} from "../../constants/AppConst";
import {hasError, hasLoginError, post} from "../../util/Utils";
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

export function receiveLoginError(response: LoginResponse) {
    return {
        type: ACTIONS.LOGIN.ERROR,
        payload: {
            errors: response.errors,
            requestStatus: REQUEST_STATUS.COMPLETE
        }
    } as const
}

export const error = (response: HttpResponse<any>) => ({
    type: ACTIONS.ERROR,
    payload: {
        error: response.error,
        requestStatus: REQUEST_STATUS.ERROR
    },

} as const)

export type LoginActionTypes =
    ReturnType<typeof sendLoginRequest> |
    ReturnType<typeof receiveLoginResponse> |
    ReturnType<typeof receiveLoginError> |
    ReturnType<typeof error>;

export const login = (loginData: LoginRequest): AppThunk => async (dispatch, getState, api) => {
    dispatch(sendLoginRequest(loginData));

    const response: HttpResponse<LoginResponse> = await post<LoginResponse>(`${api}${LOGIN}`, loginData);
debugger
    if (hasError(response)) {
        dispatch(error(response));
    } else if (hasLoginError(response)) {
        dispatch(receiveLoginError(response.parsedBody as LoginResponse));
    } else {
        dispatch(receiveLoginResponse(response.parsedBody as LoginResponse));
    }

};