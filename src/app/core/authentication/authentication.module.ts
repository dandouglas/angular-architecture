/*
* Any authentication components/services etc. will live in this module
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationStoreModule } from './store/authentication-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationStoreModule,
  ]
})
export class AuthenticationModule { }
