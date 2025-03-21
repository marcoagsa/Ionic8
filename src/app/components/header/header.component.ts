import { Component, VERSION, input, booleanAttribute } from '@angular/core';
import {
  IonBackButton,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import IonicInfo from '@ionic/angular/package.json';

@Component({
  selector: 'app-header',
  imports: [IonHeader, IonToolbar, IonBackButton, IonTitle],
  template: `<ion-header>
    <ion-toolbar>
      @if (showBackButton()) {
      <ion-back-button slot="start" />
      }
      <ion-title> {{ name }} </ion-title>
    </ion-toolbar>
  </ion-header>`,
  standalone: true,
  styles: `ion-back-button{
    display: block;
  }`,
})
export class HeaderComponent {
  name: string = `Ionic ${IonicInfo.version} and Angular ${VERSION.full}`;
  showBackButton = input(false, { transform: booleanAttribute });
}
