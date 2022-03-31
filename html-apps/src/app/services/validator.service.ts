import { Injectable } from '@angular/core';

import {
  AbstractControl,
  ValidatorFn,
  FormGroup,
  ValidationErrors
} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  static onlyChar(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value == '') return null;

      let re = new RegExp('^[a-zA-Z ]*$');
      if (re.test(control.value)) {
        return null;
      } else {
        return { onlyChar: true };
      }
    };
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: AbstractControl):
    ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (!control || !matchingControl) {
        return null;
      }

      if (
        matchingControl.errors && !matchingControl.errors['mustMatch']
      ) {
        return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMismatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
}