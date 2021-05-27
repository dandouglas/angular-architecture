import { Injectable } from '@angular/core';
import { LoginPageState } from '@features/login/store/models/login-state.model';
import { LoginSelectors } from '@features/login/store/selectors/login-selector';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AboutState } from '../store/models/about-state.model';

@Injectable({
  providedIn: 'root'
})
export class AboutFacadeService {

  constructor(
    private store: Store<AboutState>,
  ) { }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getLoginPageState(): Observable<LoginPageState | undefined> {
    return this.store.select(LoginSelectors.selectLoginPageState);
  }
}
