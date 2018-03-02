import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { NgxQrcodescanModule } from "./ngx-qrcodescan/ngx-qrcodescan.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NgxQrcodescanModule)
  .catch(err => console.log(err));
