import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState, loginStoreKey } from '../models/login-state.model';

const selectLoginState = createFeatureSelector<LoginState>(loginStoreKey);

const selectLoginPageState = createSelector(selectLoginState,
    (loginState) => loginState.loginPageState
);

export const LoginSelectors = {
    selectLoginPageState,
};
