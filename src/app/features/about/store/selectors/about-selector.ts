import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AboutState, aboutStoreKey } from '../models/about-state.model';

const selectAboutState = createFeatureSelector<AboutState>(aboutStoreKey);

const selectAboutPageState = createSelector(selectAboutState,
    (aboutState) => aboutState.aboutPageState
);

export const AboutSelectors = {
    selectAboutPageState,
};
