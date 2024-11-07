import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { TimerComponent } from './timer/timer.component';
import { ExosComponent } from './exos.component';


@NgModule({
  declarations: [
    TimerComponent,
    ExosComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
