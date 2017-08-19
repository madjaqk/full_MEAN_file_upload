import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RatsComponent } from './rats/rats.component';
import { RatsCreateComponent } from './rats/rats-create/rats-create.component';
import { RatsDetailsComponent } from './rats/rats-details/rats-details.component';
import { RatService } from "./rats/rat.service"

@NgModule({
  declarations: [
    AppComponent,
    RatsComponent,
    RatsCreateComponent,
    RatsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
