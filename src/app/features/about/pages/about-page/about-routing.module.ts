import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from '@features/about/pages/about-page/about-page.component';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
