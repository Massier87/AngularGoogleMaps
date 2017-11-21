import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import {MarkerService} from "./services/marker.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtY9EqRgQUiyHPtN1hsbvDLcENG5aqjgo'
    })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
