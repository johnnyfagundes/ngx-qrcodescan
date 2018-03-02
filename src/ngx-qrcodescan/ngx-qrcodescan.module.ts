import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQrcodescanComponent } from './ngx-qrcodescan.component';
import { NgxQrcodescanService } from "./ngx-qrcodescan.service";

@NgModule({
  declarations: [
      NgxQrcodescanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgxQrcodescanService],
  bootstrap: [NgxQrcodescanComponent],
  exports: [NgxQrcodescanComponent]
})
export class NgxQrcodescanModule { }
