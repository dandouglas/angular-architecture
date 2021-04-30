import { createAction, props } from '@ngrx/store';

const login = createAction(
  '[Authentication] Login',
);

const logout = createAction(
  '[Authentication] Logout',
);

const authSuccess = createAction(
    '[Authentication] Success',
);

const authFailure = createAction(
  '[Authentication] Fail',
);

export const AuthenticationActions = {
  login,
  logout,
  authSuccess,
  authFailure,
};
