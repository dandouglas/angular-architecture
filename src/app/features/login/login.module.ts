import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStoreModule } from './store/login-store.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    ReactiveFormsModule,
    LoginStoreModule,
  ]
})
export class LoginModule { }
