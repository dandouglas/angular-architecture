import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginPageActions } from '../actions/login-page.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginPageEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

  loggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      tap(() => this.router.navigate(['/']))
    ), { dispatch: false }
  );

}
