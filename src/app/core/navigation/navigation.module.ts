import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation.component';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
