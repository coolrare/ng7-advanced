import { Component, OnInit } from '@angular/core';
import { MorrisInit } from 'src/app/dashboard/MorrisInit';

@Component({
  selector: 'app-morris',
  templateUrl: './morris.component.html',
  styleUrls: ['./morris.component.css']
})
export class MorrisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    MorrisInit();
  }

}
