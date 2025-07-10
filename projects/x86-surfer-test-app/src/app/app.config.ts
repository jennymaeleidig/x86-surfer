import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { environment } from '../environments/environment';

import { X86_AGENT_ROOT } from 'x86-surfer-component'; // Assuming 'x86-surfer-component' is the package name

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    { provide: X86_AGENT_ROOT, useValue: environment.X86_AGENT_ROOT },
  ],
};
