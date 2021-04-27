import { AppState } from 'src/app/core/root-store/app-state.model';

export interface LoginState {
  initialising: boolean | undefined,
  loggedIn: boolean | undefined,
}

export const loginStoreKey = 'login';

export interface LoginAppState extends AppState {
    [loginStoreKey]: LoginState;
}
