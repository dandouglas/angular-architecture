import { createReducer, on, Action } from '@ngrx/store';
import { LoginPageActions } from '../actions/login-page.actions';
import { LoginState } from '../models/login-state.model';

export const initialState: LoginState = {
  loggedIn: undefined,
  initialising: undefined,
};

const LoginReducerFn = createReducer(
  initialState,
  on(LoginPageActions.enterPage, (state: LoginState) => ({
    ...state,
    LoginPageState: {
      initialising: true,
    }
  })),
  on(LoginPageActions.leavePage, (state: LoginState) => ({
    ...state,
    LoginPageState: undefined
  }))
);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return LoginReducerFn(state, action);
}
