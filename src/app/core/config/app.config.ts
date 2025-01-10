import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { themeConfig } from '@core/constants';
import { errorResponseInterceptor } from '@core/interceptors';
import { provideTranslateService } from '@ngx-translate/core';
import { providePrimeNG } from 'primeng/config';
import { DialogService } from 'primeng/dynamicdialog';
import { routes } from './app.routes';
import { translateConfig } from './translate.config';

export const appConfig: ApplicationConfig = {
  providers: [
    DialogService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([errorResponseInterceptor])),
    provideTranslateService(translateConfig),
    providePrimeNG({
      ...themeConfig,
    }),
  ],
};
