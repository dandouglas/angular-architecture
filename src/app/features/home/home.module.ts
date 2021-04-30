import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@router/home/home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeStoreModule } from './store/home-store.module';

@NgModule({
  declarations: [HomePageComponent, JumbotronComponent],
  imports: [
    HomeRoutingModule,
    HomeStoreModule,
  ]
})
export class HomeModule { }
