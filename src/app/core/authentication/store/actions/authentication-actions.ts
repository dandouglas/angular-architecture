import { createAction, props } from '@ngrx/store';

const login = createAction(
  '[Authentication] Login',
);

const logout = createAction(
  '[Authentication] Logout',
);

const authSuccess = createAction(
    '[Authentication] Login Success',
);

const authFailure = createAction(
  '[Authentication] Login Fail',
);

export const AuthenticationActions = {
  login,
  logout,
  authSuccess,
  authFailure,
};
