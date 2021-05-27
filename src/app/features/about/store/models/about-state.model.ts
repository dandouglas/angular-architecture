import { AppState } from '@core/root-store/app-state.model';

export interface AboutState {
  aboutPageState: AboutPageState | undefined,
}

export interface AboutPageState { initialised: boolean };

export const aboutStoreKey = 'about';

export interface AboutAppState extends AppState {
    [aboutStoreKey]: AboutState;
}
