import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
  '[About Page] Enter page',
);

const leavePage = createAction(
  '[About Page] Leave page',
);

export const AboutPageActions = {
  enterPage,
  leavePage,
};
