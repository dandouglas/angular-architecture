import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginStoreModule } from './store/login-store.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from '@router/login/login-routing.module';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    ReactiveFormsModule,
    LoginStoreModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
