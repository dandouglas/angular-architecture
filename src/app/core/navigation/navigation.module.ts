import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ]
})
export class NavigationModule { }
