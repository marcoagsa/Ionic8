import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '@components/header/header.component';
import { InfoCardComponent } from '@components/info-card/info-card.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    IonContent,
    InfoCardComponent,
    IonButton,
    RouterLink,
  ],
  template: `
    <app-header />

    <ion-content>
      <app-info-card />

      <ion-button
        class="ion-padding"
        shape="round"
        [routerLink]="['/two/', this.id()]"
      >
        Go to page Two
      </ion-button>
    </ion-content>
  `,
  standalone: true,
  styles: ``,
})
export class HomePage {
  id = signal('tes');
}
