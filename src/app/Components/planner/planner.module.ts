import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';



@NgModule({
  declarations: [
    PlannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlannerComponent
  ]
})
export class PlannerModule { }
