import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { TimerComponent } from './timer/timer.component';
import { ExosComponent } from './exos.component';
import {SharedModule} from '../shared/shared.module';
import { BasketComponent } from './basket/basket.component';
import { BasketListComponent } from './basket/basket-list/basket-list.component';
import { ExoFormComponent } from './exo-form/exo-form.component';


@NgModule({
  declarations: [
    TimerComponent,
    ExosComponent,
    BasketComponent,
    BasketListComponent,
    ExoFormComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule,
  ]
})
export class ExosModule { }
