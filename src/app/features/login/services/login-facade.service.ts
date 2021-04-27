import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginPageState, LoginState } from '../store/models/login-state.model';
import { LoginSelectors } from '../store/selectors/login-selector';

@Injectable({
  providedIn: 'root'
})
export class LoginFacadeService {

  constructor(
    private store: Store<LoginState>,
  ) { }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getLoginPageState(): Observable<LoginPageState | undefined> {
    return this.store.select(LoginSelectors.selectLoginPageState);
  }

  getLoggedInState(): Observable<boolean | undefined> {
    return this.store.select(LoginSelectors.selectLoggedInState);
  }
}
