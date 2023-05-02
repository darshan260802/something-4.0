import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlannerModule } from './Components/planner/planner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
