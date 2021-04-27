import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login/login-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
