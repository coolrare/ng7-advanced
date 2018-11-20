import { Component, OnInit } from '@angular/core';
import { MorrisInit } from './MorrisInit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    MorrisInit();
  }
}
