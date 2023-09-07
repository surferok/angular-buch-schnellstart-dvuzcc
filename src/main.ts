import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    const w = window as unknown as any;
    if (w['ngRef']) {
      w['ngRef'].destroy();
    }
    w['ngRef'] = ref;
    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
