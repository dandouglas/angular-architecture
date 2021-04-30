import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationActions } from '@core/authentication/store/actions/authentication-actions';
import { LoginFacadeService } from '../../services/login-facade.service';
import { LoginPageActions } from '../../store/actions/login-page.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: any;

  constructor(
    private loginFacadeService: LoginFacadeService,
  ) { }

  ngOnInit(): void {
    this.loginFacadeService.dispatch(LoginPageActions.enterPage());

    this.form = new FormGroup({
      username: new FormControl('some-user'),
      password: new FormControl('password')
    });
  }

  ngOnDestroy(): void {
    this.loginFacadeService.dispatch(LoginPageActions.leavePage());
  }

  onSubmit(): void {
    this.loginFacadeService.dispatch(AuthenticationActions.login());
  }

}
