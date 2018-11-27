import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { nameValidator, sidValidator } from './nameValidator';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({

      contacts: this.fb.array([
        this.fb.group({
          name: ['Will', [Validators.required, Validators.minLength(3), sidValidator]],
          email: ['example@example.com', [Validators.required]]
        }),
        this.fb.group({
          name: ['Will', [Validators.required, Validators.minLength(3), nameValidator]],
          email: ['example@example.com', [Validators.required]]
        })
      ])

    });

    this.form.reset({
      contacts: [
        { name: 'John', email: 'example1@miniasp.com' },
        { name: 'Will', email: 'example2@miniasp.com' }
      ]
    });
  }

  ToggleEnable(ctrl: FormControl) {
    ctrl.disabled ? ctrl.enable() : ctrl.disable();
  }

  AddNewContact() {
    const arr = this.form.get('contacts') as FormArray;
    arr.push(this.fb.group({
      name: ['Will', [Validators.required, Validators.minLength(3)]],
      email: ['example@example.com', [Validators.required]]
    }));
  }

}
