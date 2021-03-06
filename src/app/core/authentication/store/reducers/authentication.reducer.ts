import { createReducer, on, Action } from '@ngrx/store';
import { AuthenticationActions } from '../actions/authentication-actions';
import { AuthenticationState } from '../model/authentication-state.model';

export const initialAuthState: AuthenticationState = {
  authenticated: false
}

const authReducerFn = createReducer(
  initialAuthState,
  on(AuthenticationActions.logout, (state: AuthenticationState) => ({
    ...state,
    authenticated: false
  })),
  on(AuthenticationActions.authSuccess, (state: AuthenticationState) => ({
    ...state,
    authenticated: true
  })),
  on(AuthenticationActions.authFailure, (state: AuthenticationState) => ({
    ...state,
    authenticated: false
  })),
);

export function authReducer(state: AuthenticationState, action: Action) {
  return authReducerFn(state, action);
}
