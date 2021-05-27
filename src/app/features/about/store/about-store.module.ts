import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { aboutReducer } from './reducers/about-reducer';
import { aboutStoreKey } from './models/about-state.model';
import { AboutPageEffects } from './effects/about-effects';

@NgModule({
    imports: [
        StoreModule.forFeature(aboutStoreKey, aboutReducer),
        EffectsModule.forFeature([
          AboutPageEffects
        ])
    ]
})
export class AboutStoreModule { }
