import { createReducer, on, Action } from '@ngrx/store';
import { AboutPageActions } from '../actions/about-page.actions';
import { AboutState } from '../models/about-state.model';


export const initialState: AboutState = {
  aboutPageState: {
    initialised: false,
  }
};

const aboutReducerFn = createReducer(
  initialState,
  on(AboutPageActions.enterPage, (state: AboutState) => ({
    ...state,
    aboutPageState: {
      initialised: true,
    }
  })),
  on(AboutPageActions.leavePage, (state: AboutState) => ({
    ...state,
    aboutPageState: undefined
  })),
);

export function aboutReducer(state: AboutState, action: Action) {
  return aboutReducerFn(state, action);
}
