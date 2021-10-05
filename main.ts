import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function langArEn() {
  var mainUrl = (window.location.href).split('/')[3] === 'ar';
  //var  mainUrlArr = mainUrl.split('/')
     if(typeof mainUrl[3] !== 'undefined' && mainUrl[3] === 'ar') {
      return true;
     } else {
      return false;
     }
}
var isLangChecked = langArEn()

