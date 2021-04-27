import { AppState } from 'src/app/core/root-store/app-state.model';

export interface LoginState {
  loginPageState: LoginPageState | undefined,
  loggedIn: boolean | undefined,
}

export interface LoginPageState { initialising: boolean | undefined };

export const loginStoreKey = 'login';

export interface LoginAppState extends AppState {
    [loginStoreKey]: LoginState;
}
