import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private loginFacadeService: LoginFacadeService,
  ) { }

  ngOnInit(): void {
    this.loginFacadeService.dispatch(LoginPageActions.enterPage());

    this.form = this.formBuilder.group({
      username: ['someuser'],
      password: ['password']
    });
  }

  ngOnDestroy(): void {
    this.loginFacadeService.dispatch(LoginPageActions.leavePage());
  }

  onSubmit(): void {
    console.log('Attempt login...')
  }

}
