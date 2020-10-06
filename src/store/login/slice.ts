import {
    LoginErrorResponse,
    LoginRequest,
    LoginResponseState,
    LoginState,
    LoginSuccessResponse,
    REQUEST_STATUS
} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: LoginState = {
    user: undefined,
    errors: undefined,
    requestStatus: REQUEST_STATUS.COMPLETE
};

export const { actions, reducer } = createSlice({
    name: 'login',
    initialState,
    reducers: {
        request: {
            reducer(
              state,
              action: PayloadAction<{
                  loginData: LoginRequest,
                  requestStatus: REQUEST_STATUS
              }>
            ) {
                state.requestStatus = action.payload.requestStatus;
            },
            prepare(request: LoginRequest) {
                return {
                    payload: {
                        loginData: request,
                        requestStatus: REQUEST_STATUS.PENDING
                    }
                }
            }
        },
        response: {
            reducer(
              state,
              action: PayloadAction<{
                  response: LoginSuccessResponse,
                  requestStatus: REQUEST_STATUS
              }>
            ) {
                state.user = action.payload.response.data;
                state.requestStatus = action.payload.requestStatus;
            },
            prepare(response: LoginResponseState) {
                return {
                    payload: {
                        response: response as LoginSuccessResponse,
                        requestStatus: REQUEST_STATUS.COMPLETE
                    }
                }
            }
        },
        error: {
            reducer(
              state,
              action: PayloadAction<{
                  error: LoginErrorResponse,
                  requestStatus: REQUEST_STATUS
              }>
            ) {
               state.errors = action.payload.error.errors;
               state.requestStatus = action.payload.requestStatus;
            },
            prepare(response: LoginResponseState) {
                return {
                    payload: {
                        error: response as LoginErrorResponse,
                        requestStatus: REQUEST_STATUS.COMPLETE
                    }
                }
            }
        }
    }
});

export default {
    actions,
    reducer
};