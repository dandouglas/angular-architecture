import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationState } from '../store/model/authentication-state.model';
import { AuthenticationSelectors } from '../store/selectors/authentication.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacadeService {

  constructor(
    private store: Store<AuthenticationState>,
  ) { }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getCurrentAuthState(): Observable<boolean> {
    return this.store.select(AuthenticationSelectors.selectCurrentAuthState);
  }
}
