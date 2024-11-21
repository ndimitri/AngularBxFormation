import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeetingType} from '../../shared/enum/MeetingType';
import {weekAfterToday} from '../../shared/validators/week-after-today';
import {Address} from '../../shared/models/address';
import {Appointment} from '../../shared/models/appointment';

@Component({
  selector: 'app-exo-form',
  templateUrl: './exo-form.component.html',
  styleUrl: './exo-form.component.scss'
})
export class ExoFormComponent {
  appointmentForm : FormGroup;
  addressForm : FormGroup;

  fullForm: FormGroup;

  protected readonly Meetingtype = MeetingType;

  constructor(
    private readonly _fb :FormBuilder,
  ) {
    this.appointmentForm = this._fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]],
      lastName: [null, [Validators.required,  Validators.minLength(2), Validators.maxLength(80)]],
      date: [null, [Validators.required, weekAfterToday()]],
      description: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email,]],
      meetingType: [null, [Validators.required]],
      atHome: [false, [Validators.required]],
      dates: this._fb.array([]),

    });

    this.addressForm = this._fb.group({
      street: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]],
      number: [null, [Validators.required, Validators.minLength(2)]],
      city: [null, [Validators.required, Validators.minLength(3)]],
      state: [null, [Validators.required, Validators.minLength(3)]],
      zip: [null, [Validators.required, Validators.minLength(3)]],
    });

    this.fullForm = this._fb.group({
      appointmentForm: this.appointmentForm,
      addressForm: this.addressForm,

    })
  }

  //Get des dates dynamiques
  get dates(): FormArray {
    return this.appointmentForm.get('dates') as FormArray;
  }

  // Ajouter une nouvelle date avec validators
  addDate(): void {
    const dateControl = this._fb.group({
      date: [null, [Validators.required, weekAfterToday()]], // Validation personnalisée
    });
    this.dates.push(dateControl);
  }

  // Supprimer une date du FormArray
  removeDate(index: number): void {
    this.dates.removeAt(index);
  }

  submit() {
    this.appointmentForm.markAllAsTouched();
    this.dates.controls.forEach((control) => control.markAllAsTouched());

    if(this.appointmentForm.invalid){
      console.log('Invalid appointment form');
      return;
    }

    if (this.dates.invalid) {
      console.log('Une ou plusieurs dates supplémentaires sont invalides');
      return;
    }

    // Si 'atHome' est coché, valider l'adresse
    if (this.appointmentForm.get('atHome')?.value) {
      this.addressForm.markAllAsTouched();  // Marquer le formulaire d'adresse comme touché

      // Vérifier si le formulaire d'adresse est invalide
      if (this.addressForm.invalid) {
        console.log('Invalid address form');
        return;
      }
    }

    console.log('Valid');

    //Console.log() to check the form objects
    let appointment : Appointment= this.appointmentForm.value;
    let address : Address= this.addressForm.value;
    const additionalDates : Date[] = this.dates.value;

    console.log('Appointment:', appointment);
    console.log('Address:', address);
    console.log('Additional Dates:', additionalDates);
  }

}
