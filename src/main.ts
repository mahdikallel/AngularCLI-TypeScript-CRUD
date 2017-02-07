/*Angular 2 can be used not just in browsers, but also on other platforms such as mobile apps or even desktop apps.
 So, when we start our application we have to specify what platform we want to target.
 That’s why we import: platform-browser-dynamic*/

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';

//We are loading our AppModule into browser platform.
import {AppModule} from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
