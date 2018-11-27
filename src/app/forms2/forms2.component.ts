import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
      name: ['Will', [Validators.required, Validators.minLength(3)]],

      group1: this.fb.group({
        email: ['example@example.com', [Validators.required]]
      })

    });
  }

  ToggleEnable(name: string) {
    const ctrl = this.form.get(name) as FormControl;
    ctrl.disabled ? ctrl.enable() : ctrl.disable();
  }

}
