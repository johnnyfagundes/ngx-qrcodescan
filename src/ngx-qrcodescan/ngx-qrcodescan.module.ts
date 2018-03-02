import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQrcodescanComponent } from './ngx-qrcodescan.component';

@NgModule({
  declarations: [
      NgxQrcodescanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgxQrcodescanComponent],
  exports: [NgxQrcodescanComponent]
})
export class NgxQrcodescanModule { }
