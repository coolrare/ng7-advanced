import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  num;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.num = this.route.snapshot.params['num'];

    $('#dataTables-example').DataTable({
      responsive: true
    });
  }
}
