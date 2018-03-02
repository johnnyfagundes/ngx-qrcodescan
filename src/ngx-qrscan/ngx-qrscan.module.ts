import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQrscanComponent } from './ngx-qrscan.component';

@NgModule({
  declarations: [
      NgxQrscanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgxQrscanComponent],
  exports: [NgxQrscanComponent]
})
export class NgxQrscanModule { }
