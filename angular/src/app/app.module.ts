import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {fecha_actualComponent} from './fecha_actual/fecha_actual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';

@NgModule({
  declarations: [
    AppComponent,
    fecha_actualComponent,
    CopyrightComponent,
    EjdirectivangifComponent,
    ViewmodeloComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
