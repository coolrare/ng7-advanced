import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from './shared/fallbackRoute';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
