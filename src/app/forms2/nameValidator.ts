import { AbstractControl } from '@angular/forms';
export function nameValidator(ctl: AbstractControl) {
  if (ctl.value.indexOf('will') >= 0) {
    return null;
  }
  else {
    return {
      nameValidator: true
    };
  }
}