import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginStoreKey } from './models/login-state.model';
import { LoginReducer } from './reducers/login-reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(loginStoreKey, LoginReducer),
        EffectsModule.forFeature([
          // LoginPageEffects
        ])
    ]
})
export class LoginStoreModule { }
