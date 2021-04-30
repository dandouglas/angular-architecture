import { createReducer, on, Action } from '@ngrx/store';
import { LoginPageActions } from '../actions/login-page.actions';
import { LoginState } from '../models/login-state.model';

export const initialState: LoginState = {
  loginPageState: {
    initialised: false,
  }
};

const loginReducerFn = createReducer(
  initialState,
  on(LoginPageActions.enterPage, (state: LoginState) => ({
    ...state,
    loginPageState: {
      initialised: true,
    }
  })),
  on(LoginPageActions.leavePage, (state: LoginState) => ({
    ...state,
    loginPageState: undefined
  })),
);

export function loginReducer(state: LoginState, action: Action) {
  return loginReducerFn(state, action);
}
