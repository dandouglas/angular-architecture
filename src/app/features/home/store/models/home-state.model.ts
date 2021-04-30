import { AppState } from 'src/app/core/root-store/app-state.model';

export interface HomeState {
  homePageState: HomePageState,
}

export interface HomePageState {
  someEvent: string
};

export const homeStoreKey = 'home';

export interface HomeAppState extends AppState {
    [homeStoreKey]: HomeState;
}
