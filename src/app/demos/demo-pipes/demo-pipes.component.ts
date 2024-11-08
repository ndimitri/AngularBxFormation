import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.scss'
})
export class DemoPipesComponent {
  text: string = 'This Is Angular!!!!';
  nbr: number = 42.321654789456;
  dateToday: Date = new Date();
  temperature: number = 42;
}
