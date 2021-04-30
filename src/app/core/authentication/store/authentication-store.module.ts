import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authenticationStoreKey } from './model/authentication-state.model';
import { authReducer } from './reducers/authentication.reducer';
import { AuthenticationEffects } from './effects/authentication.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(authenticationStoreKey, authReducer),
        EffectsModule.forFeature([
          AuthenticationEffects
        ])
    ]
})
export class AuthenticationStoreModule { }
