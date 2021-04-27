import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
    '[Login Page] Enter page',
);

const leavePage = createAction(
  '[Login Page] Leave page',
);

export const LoginPageActions = {
  enterPage,
  leavePage,
};
