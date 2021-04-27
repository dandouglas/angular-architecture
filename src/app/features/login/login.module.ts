import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginModule { }
