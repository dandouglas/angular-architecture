import { createReducer, on, Action } from '@ngrx/store';
import { LoginPageActions } from '../actions/login-page.actions';
import { LoginState } from '../models/login-state.model';

export const initialState: LoginState = {
  loggedIn: undefined,
  loginPageState: {
    initialising: undefined,
  }
};

const LoginReducerFn = createReducer(
  initialState,
  on(LoginPageActions.enterPage, (state: LoginState) => ({
    ...state,
    loginPageState: {
      initialising: true,
    }
  })),
  on(LoginPageActions.leavePage, (state: LoginState) => ({
    ...state,
    loginPageState: undefined
  })),
  on(LoginPageActions.login, (state: LoginState) => ({
    ...state,
    loginPageState: {
      initialising: false,
    },
    loggedIn: true
  }))
);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return LoginReducerFn(state, action);
}
