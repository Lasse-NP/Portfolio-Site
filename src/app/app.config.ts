import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgToast, TOAST_POSITIONS } from 'ng-angular-popup';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNgToast({
          duration: 3000,
          position: TOAST_POSITIONS.BOTTOM_CENTER,
    }),
  ]
};
