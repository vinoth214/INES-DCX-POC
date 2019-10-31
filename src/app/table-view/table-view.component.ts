import { Component, OnInit } from '@angular/core';


import * as data from '../../assets/Json/cars.json';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(data.data);
  }

}
