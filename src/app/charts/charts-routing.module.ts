import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';
import { MorrisComponent } from './morris/morris.component';

const routes: Routes = [
  { path: '', redirectTo: 'flot', pathMatch: 'full' },
  { path: 'flot', component: FlotComponent },
  { path: 'morris', component: MorrisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
