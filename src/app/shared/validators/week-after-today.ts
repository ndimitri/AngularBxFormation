import {AbstractControl, ValidatorFn} from '@angular/forms';

declare global {
  interface Date{
    addDays(days: number) : Date;
  }
}

Date.prototype.addDays = function(days : number){
  this.setDate(this.getDate() + days);
  return this;
}


export const weekAfterToday = () : ValidatorFn | null => {
  return(control : AbstractControl) => {

    //En gros c'est pas le role du validateur de vérifier si le champ est null ou pas, c'est le role du required
    //Donc on dit que si la valeur du champ est null, on dit que tout va bien quand même
    if(!control.value){
      return null;
    }
    let date: Date = new Date(control.value);
    let now : Date = new Date();

    let oneWeekLater : Date = new Date().addDays(7);
    // oneWeekLater.setDate(now.getDate() + 7);

    if(date >= oneWeekLater) {
      return null;
    }

    return {weekAfterToday: true};

  }
}
