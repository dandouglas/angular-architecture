import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState, loginStoreKey } from '../models/login-state.model';

const selectLoginState = createFeatureSelector<LoginState>(loginStoreKey);

const selectLoginPageState = createSelector(selectLoginState,
    (loginState) => loginState.loginPageState
);

const selectLoggedInState = createSelector(selectLoginState,
    (loginState) => loginState.loggedIn
);

export const LoginSelectors = {
    selectLoginPageState,
    selectLoggedInState,
};
