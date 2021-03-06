import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Event, NavigationError } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng7-advanced';
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(v => v instanceof NavigationError),
        pairwise()
      )
      .subscribe(([event_prev, event_curr]: [NavigationError, NavigationError]) => {
        // event_prev
        // event_curr
      });
  }
}
