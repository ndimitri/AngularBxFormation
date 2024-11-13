import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule} from "@angular/forms";
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import {SharedModule} from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoPipesComponent,
    DemoDirectivesComponent,
    DemoInputOutputComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
  ]
})
export class DemosModule { }
