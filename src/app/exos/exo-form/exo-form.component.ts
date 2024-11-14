import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeetingType} from '../../shared/enum/MeetingType';
import {weekAfterToday} from '../../shared/validators/week-after-today';

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
      lastName: [null, [Validators.required,  Validators.minLength(2), Validators.minLength(80)]],
      date: [null, [Validators.required, weekAfterToday()]],
      description: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email,]],
      meetingType: [null, [Validators.required]],
      atHome: [false, [Validators.required]],
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

  submit() {
    this.appointmentForm.markAllAsTouched();

    if(this.appointmentForm.invalid){
      console.log('Invalid');
      return;
    }
    console.log('Valid');

    let appointment = this.appointmentForm.value;
  }

}
