import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState, homeStoreKey } from '../models/home-state.model';

const selectHomeState = createFeatureSelector<HomeState>(homeStoreKey);

const selectHomePageState = createSelector(selectHomeState,
    (homeState) => homeState.homePageState
);

export const HomeSelectors = {
  selectHomePageState,
};
