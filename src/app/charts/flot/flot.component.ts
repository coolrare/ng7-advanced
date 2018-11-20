import { Component, OnInit } from '@angular/core';
import { flotInit } from './flotInit';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    flotInit();
  }
}

