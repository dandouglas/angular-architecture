import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutRoutingModule } from '@features/about/pages/about-page/about-routing.module';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    AboutRoutingModule
  ]
})
export class AboutModule { }
