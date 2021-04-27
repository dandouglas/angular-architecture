import { AppState } from 'src/app/core/root-store/app-state.model';

export interface HomeState {
  homePageState: HomePageState | undefined,
}

export interface HomePageState { initialising: boolean | undefined };

export const homeStoreKey = 'home';

export interface HomeAppState extends AppState {
    [homeStoreKey]: HomeState;
}
