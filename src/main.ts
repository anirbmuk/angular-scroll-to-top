import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

const CORE_MODULES = [BrowserAnimationsModule] as const;

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(...CORE_MODULES)]
}).catch((err) => console.error(err));
