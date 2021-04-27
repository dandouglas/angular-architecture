import { NgModule } from '@angular/core';
import { HomeModule } from '@features/home/home.module';
import { LoginModule } from '@features/login/login.module';

@NgModule({
  exports: [
    HomeModule,
    LoginModule,
  ]
})
export class FeaturesModule { }
