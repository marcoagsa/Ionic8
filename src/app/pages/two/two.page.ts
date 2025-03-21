import { Component, input, OnInit } from '@angular/core';
import { IonContent, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-two',
  template: `
    <app-header showBackButton />

    <ion-content class="ion-padding">
      <ion-text color="danger">
        <h1>{{ id() }}</h1>
      </ion-text>
    </ion-content>
  `,
  standalone: true,
  styles: [``],
  imports: [IonContent, IonText, HeaderComponent],
})
export class TwoPage implements OnInit {
  id = input<string>();
  ngOnInit() {
    console.log(this.id());
  }
}
