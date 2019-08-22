import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  startDate = new Date(2019, 6, 1);
  futureDate = new Date(2019, 6, 2);
  ngOnInit() {
  }

}
