import { createReducer, on, Action } from '@ngrx/store';
import { HomePageActions } from '../actions/home-page.actions';
import { HomeState } from '../models/home-state.model';

export const initialState: HomeState = {
  homePageState: {
    initialising: undefined,
  }
};

const HomeReducerFn = createReducer(
  initialState,
  on(HomePageActions.enterPage, (state: HomeState) => ({
    ...state,
    homePageState: {
      initialising: true,
    }
  })),
  on(HomePageActions.leavePage, (state: HomeState) => ({
    ...state,
    homePageState: undefined
  })),
);

export function HomeReducer(state: HomeState | undefined, action: Action) {
  return HomeReducerFn(state, action);
}
