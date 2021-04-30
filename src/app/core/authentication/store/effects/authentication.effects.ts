import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthenticationActions } from '@core/authentication/store/actions/authentication-actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.login),
      map(() => {
        return randomSuccess()
          ? AuthenticationActions.authSuccess()
          : AuthenticationActions.authFailure()
      })
    ));

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.logout),
      tap(() => {
        console.log('logged out');
      })), { dispatch: false }
  );

  navigateToHome$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthenticationActions.authSuccess),
        tap(() => this.router.navigate(['/']))
      ), { dispatch: false }
  )
}

function randomSuccess(): boolean {
  return Math.floor(Math.random() * 2) !== 0;
}
