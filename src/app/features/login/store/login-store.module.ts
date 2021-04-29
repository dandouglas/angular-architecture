import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginStoreKey } from './models/login-state.model';
import { loginReducer } from './reducers/login-reducer';
import { LoginPageEffects } from './effects/login-effects';

@NgModule({
    imports: [
        StoreModule.forFeature(loginStoreKey, loginReducer),
        EffectsModule.forFeature([
          LoginPageEffects
        ])
    ]
})
export class LoginStoreModule { }
