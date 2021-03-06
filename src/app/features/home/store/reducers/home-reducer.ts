import { createReducer, on, Action } from '@ngrx/store';
import { HomePageActions } from '../actions/home-page.actions';
import { HomeState } from '../models/home-state.model';

export const initialState: HomeState = {
  homePageState: {
    someEvent: ''
  }
};

const homeReducerFn = createReducer(
  initialState,
  on(HomePageActions.enterPage, (state: HomeState) => ({
    ...state,
    homePageState: {
      someEvent: ''
    }
  })),
  on(HomePageActions.leavePage, (state: HomeState) => ({
    ...state,
    homePageState: {
      someEvent: ''
    }
  })),
  on(HomePageActions.someAction, (state, { event }) => ({
    ...state,
    homePageState: {
      ...state.homePageState,
      someEvent: event
    }
  })),
);

export function homeReducer(state: HomeState, action: Action) {
  return homeReducerFn(state, action);
}
