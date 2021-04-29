import { createReducer, on, Action } from '@ngrx/store';
import { createFalse } from 'typescript';
import { LoginPageActions } from '../actions/login-page.actions';
import { LoginState } from '../models/login-state.model';

export const initialState: LoginState = {
  loggedIn: false,
  loginPageState: {
    initialising: false,
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

export function loginReducer(state: LoginState, action: Action) {
  return loginReducerFn(state, action);
}
