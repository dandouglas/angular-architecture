import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '../../router/home/home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [HomeRoutingModule]
})
export class HomeModule { }
