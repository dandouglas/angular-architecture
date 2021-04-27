import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
    '[Login Page] Enter page',
);

const leavePage = createAction(
  '[Login Page] Leave page',
);

const login = createAction(
  '[Login Page] Login',
);

export const LoginPageActions = {
  enterPage,
  leavePage,
  login,
};
