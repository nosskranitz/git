import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = true;

  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';
  // lié html :         <app-appareil [appareilName]="appareilThree" [appareilStatus]="'allumé'"></app-appareil>

  appareils = [
    {name:"Machine à laver",status:'allumé'},
    {name: 'Frigo',status:'allumé'},
    {name:'Ordinateur',status:'éteint'}];

  onAllumer() {
    console.log('On allume tout !');
  }
}
