import {
  LoginRequest,
  AppThunk, LoginResponseState, LoginErrorResponse, LoginSuccessResponse
} from "./types";
import {LOGIN} from "../../constants/AppConst";
import {hasLoginError, post} from "../../util/Utils";
import {HttpResponse} from "../../util/types";
import * as loginSlice from './slice';

export const login = (loginData: LoginRequest): AppThunk => async (dispatch, getState, api) => {
  dispatch(loginSlice.actions.request(loginData));

  const response: HttpResponse<LoginResponseState> = await post<LoginResponseState>(`${api}${LOGIN}`, loginData);
  debugger
  if (hasLoginError(response)) {
    dispatch(loginSlice.actions.error(response.parsedBody as LoginErrorResponse));
  } else {
    dispatch(loginSlice.actions.response(response.parsedBody as LoginSuccessResponse));
  }
};