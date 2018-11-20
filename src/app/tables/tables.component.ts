import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  num = 0;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.num = +p['num'];
    });

    $('#dataTables-example').DataTable({
      responsive: true
    });
  }

  addOne() {
    // this.router.navigateByUrl('/tables/' + (this.num + 1));

    // this.router.navigateByUrl(`/tables/${this.num + 1}`);

    this.router.navigate(['/tables', this.num + 1]);
  }
}
