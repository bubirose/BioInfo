import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BioInfoAppComponent } from './bio-info-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BioInfoAppComponent
  ],
  bootstrap: [BioInfoAppComponent]
})
export class AppModule { }
