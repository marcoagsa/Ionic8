import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from '@app/app-routes';
import { AppComponent } from '@app/app.component';
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideIonicAngular({
      useSetInputAPI: true,
    }),
  ],
}).catch((err) => console.error(err));
