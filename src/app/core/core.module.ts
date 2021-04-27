import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { NavigationModule } from './navigation/navigation.module';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    AuthenticationModule,
    NavigationModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('The core module has already been loaded. You should only import core modules once into the app module.');
    }
  }
}
