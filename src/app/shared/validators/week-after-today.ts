import {AbstractControl, ValidatorFn} from '@angular/forms';

export const weekAfterToday = () : ValidatorFn | null => {
  return(control : AbstractControl) => {
    if(!control){
      return null;
    }
    let date: Date = new Date(control.value);
    let now : Date = new Date();

    let oneWeekLater : Date = new Date();
    oneWeekLater.setDate(now.getDate() + 7);

    if(date >= oneWeekLater) {
      return null;
    }

    return {weekAfterToday: true};

  }
}
