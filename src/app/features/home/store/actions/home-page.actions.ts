import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
    '[Home Page] Enter page',
);

const leavePage = createAction(
  '[Home Page] Leave page',
);

const someAction = createAction(
  '[Home Page] Some action',
  props<{ event: string }>(),
);

export const HomePageActions = {
  enterPage,
  leavePage,
  someAction,
};
