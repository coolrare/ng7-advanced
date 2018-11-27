import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  data: any = {
    name: 'Will'
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('表單上有問題，請先解決再送出！');
    } else {
      console.log('送出表單');
    }
  }
}
