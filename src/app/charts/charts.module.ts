import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';
import { MorrisComponent } from './morris/morris.component';

@NgModule({
  declarations: [
    FlotComponent,
    MorrisComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
