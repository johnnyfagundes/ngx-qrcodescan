import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { NgxQrscanModule } from './ngx-qrscan/ngx-qrscan.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NgxQrscanModule)
  .catch(err => console.log(err));
