import { createReducer, on, Action } from '@ngrx/store';
import { LoginPageActions } from '../actions/login-page.actions';
import { LoginState } from '../models/login-state.model';

export const initialState: LoginState = {
  loggedIn: undefined,
  loginPageState: {
    initialising: undefined,
  }
};

const loginReducerFn = createReducer(
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

export function loginReducer(state: LoginState | undefined, action: Action) {
  return loginReducerFn(state, action);
}
