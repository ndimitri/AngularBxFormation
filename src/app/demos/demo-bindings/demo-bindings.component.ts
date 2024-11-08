import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.scss'
})
export class DemoBindingsComponent {

  // prop => nomDeVariable: Type [=valeur];
  formateur : string = 'Nico';
  date : Date = new Date();
  placeholderText : string = 'Rentrez votre nom';

  names : string[] = ['Osmane', 'Amin','Ayoub', 'Nicolas','Viktor', 'Jeoffrey', 'Christopher', 'Ana Maria'];

  result: string | null = null;

  getResult() : void {
    let looser = this.names[Math.floor(Math.random() * this.names.length)];
    let winner = this.names[Math.floor(Math.random() * this.names.length)];
    this.result = `${looser} doit offrir un café à ${winner}`;
  }

}
