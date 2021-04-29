import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@router/home/home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [HomePageComponent, JumbotronComponent],
  imports: [HomeRoutingModule]
})
export class HomeModule { }
