import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutRoutingModule } from '@features/about/pages/about-page/about-routing.module';
import { PageModule } from '@shared/ui/components/page/page.module';
import { AboutStoreModule } from './store/about-store.module';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    AboutRoutingModule,
    PageModule,
    AboutStoreModule,
  ]
})
export class AboutModule { }
