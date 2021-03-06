import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeStoreKey } from './models/home-state.model';
import { homeReducer } from './reducers/home-reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(homeStoreKey, homeReducer),
        EffectsModule.forFeature([
        ])
    ]
})
export class HomeStoreModule { }
