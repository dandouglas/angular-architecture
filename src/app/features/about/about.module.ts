import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutRoutingModule } from '@features/about/pages/about-page/about-routing.module';
import { PageModule } from '@shared/ui/components/page/page.module';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    AboutRoutingModule,
    PageModule,
  ]
})
export class AboutModule { }
