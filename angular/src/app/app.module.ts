import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {fecha_actualComponent} from './fecha_actual/fecha_actual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
//import { AppMenuitemComponent } from './app-menuitem/app-menuitem.component';
//import { AppMenuitemDirective } from './app-menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { menuitemDirective } from './menuitem.directive';

@NgModule({
  declarations: [
    AppComponent,
    fecha_actualComponent,
    CopyrightComponent,
    EjdirectivangifComponent,
    ViewmodeloComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    ArrayobjetosComponent,
    EjdirectivangswitchComponent,
    //AppMenuitemComponent,
    //AppMenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent,
    //MenuitemDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
