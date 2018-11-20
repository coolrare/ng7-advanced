import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng7-advanced';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.router.events.subscribe(evt => {});
  }
}
