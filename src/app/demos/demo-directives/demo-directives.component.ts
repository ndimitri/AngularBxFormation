import { Component } from '@angular/core';
import {Trainer} from '../../shared/models/trainer';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.scss'
})
export class DemoDirectivesComponent {

  myColors: string[] = ['darkred', 'darkblue', 'darkgreen', 'goldenrod'];

  myColor : string = 'darkred';

  i : number = 0;


  isBold: boolean = false;
  isBig: boolean = false;
  isItalic: boolean = false;

  isDayTime : boolean = true;

  trainers: Trainer[] = [
    {
      id: 1,
      firstname : 'Seb',
      lastname: 'Bya',
      pictureUrl : 'seb.png',
      isActive : true,
    },
    {
      id: 2,
      firstname : 'Flavian',
      lastname: 'Ovyn',
      pictureUrl : 'flavian.png',
      isActive : true,
    },
    {
      id: 3,
      firstname : 'Alex',
      lastname: 'Kimtsaris',
      pictureUrl : 'alex.png',
      isActive : false,
    },
  ];

  constructor() {
    setInterval(() => {

      this.myColor = this.myColors[this.i++%this.myColors.length];
    }, 100)
  }

  toggleIsBold():void{
    this.isBold = !this.isBold;
  }

  toggleIsItalic():void{
    this.isItalic = !this.isItalic;
  }
  toggleIsBig():void{
    this.isBig = !this.isBig;
  }

  toggleIsDayTime():void{
    this.isDayTime = !this.isDayTime;
  }

}
