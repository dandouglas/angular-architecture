import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@features/home/pages/home-page/home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeStoreModule } from './store/home-store.module';
import { PageModule } from '@shared/ui/components/page/page.module';

@NgModule({
  declarations: [HomePageComponent, JumbotronComponent],
  imports: [
    HomeRoutingModule,
    HomeStoreModule,
    PageModule,
  ]
})
export class HomeModule { }
