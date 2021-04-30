import { AppState } from '@core/root-store/app-state.model';

export interface AuthenticationState {
  authenticated: boolean
}

export const authenticationStoreKey = 'authentication';

export interface AuthenticationAppState extends AppState {
  [authenticationStoreKey]: AuthenticationState
}
