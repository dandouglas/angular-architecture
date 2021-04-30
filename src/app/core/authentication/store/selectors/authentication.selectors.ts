import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationState, authenticationStoreKey } from '../model/authentication-state.model';

const selectAuthenticationState = createFeatureSelector<AuthenticationState>(authenticationStoreKey);

const selectCurrentAuthState = createSelector(selectAuthenticationState,
    (authState) => authState ? authState.authenticated : false
);

export const AuthenticationSelectors = {
    selectCurrentAuthState,
};
