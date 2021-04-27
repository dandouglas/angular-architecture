import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { LoginState } from '../store/models/login-state.model';

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
}
