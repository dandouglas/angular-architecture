import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginStoreModule } from './store/login-store.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoginStoreModule,
  ]
})
export class LoginModule { }
