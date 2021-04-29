import { createReducer, on, Action } from '@ngrx/store';
import { HomePageActions } from '../actions/home-page.actions';
import { HomeState } from '../models/home-state.model';

export const initialState: HomeState = {
  homePageState: {
    initialising: false,
    someEvent: ''
  }
};

const HomeReducerFn = createReducer(
  initialState,
  on(HomePageActions.enterPage, (state: HomeState) => ({
    ...state,
    homePageState: {
      initialising: true,
      someEvent: ''
    }
  })),
  on(HomePageActions.leavePage, (state: HomeState) => ({
    ...state,
    homePageState: {
      initialising: false,
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

export function HomeReducer(state: HomeState | undefined, action: Action) {
  return HomeReducerFn(state, action);
}
