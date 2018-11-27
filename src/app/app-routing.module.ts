import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { fallbackRoute } from './shared/fallbackRoute';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { AuthGuard } from './auth.guard';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', canActivate: [AuthGuard], component: TablesComponent },
  { path: 'tables/:num', canActivate: [AuthGuard], component: TablesComponent },
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  },
  { path: 'forms', component: FormsComponent },
  fallbackRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
