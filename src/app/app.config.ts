import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, {useHash: true})),
    provideHttpClient(),
  ]
};
