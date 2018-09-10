import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName : string =  "test";
  @Input() appareilStatus: string = 'éteint';
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    console.log("yo");
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'yellow';
    }
  }
  // setStatus(etat){
  //   this.appareilStatus=etat;
  // }
  // onAllumer(){
  //   if(this.appareilStatus="allumé")
  //   this.appareilStatus="eteint";
  //   else this.appareilStatus="allumé";
  // }
}
