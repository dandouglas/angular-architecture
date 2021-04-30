import { AppState } from '@core/root-store/app-state.model';

export interface LoginState {
  loginPageState: LoginPageState | undefined,
}

export interface LoginPageState { initialised: boolean };

export const loginStoreKey = 'login';

export interface LoginAppState extends AppState {
    [loginStoreKey]: LoginState;
}
