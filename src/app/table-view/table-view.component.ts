import { Component, OnInit } from '@angular/core';


import * as data from '../../assets/Json/cars.json';
import { ColumnDef } from '../prime-table/prime-table.component.js';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  public carsData;
  public selectedRowsData;
  constructor() { }

  // public cols: ColumnDef[] = [
  //   { header: 'Brand', field: 'brand', filterMatchMode: 'equals', colWidthPercentage: '20%', type: 'dropdown', isEditable: true },
  //   { header: 'Year', field: 'year', filterMatchMode: '', colWidthPercentage: '20%', type: 'date' },
  //   { header: 'Color', field: 'color', filterMatchMode: 'in', colWidthPercentage: '20%', type: 'text' },
  //   { header: 'Vin', field: 'vin', filterMatchMode: 'contains', colWidthPercentage: '20%', type: 'text' },
  // ];

  public cols: ColumnDef[] = [
      {header: 'Status', field: 'status', filterMatchMode: 'in', colWidthPercentage: '120px', type: 'text'},
      {header: '1st Notification Date', field: '1stNotificationDate', filterMatchMode: 'date', colWidthPercentage: '200px', type: 'date'},
      {header: 'Fund', field: 'fund', filterMatchMode: 'in', colWidthPercentage: '150px', type: 'text'},
      {header: 'Sub-Fund', field: 'SubFund', filterMatchMode: 'in', colWidthPercentage: '150px', type: 'text'},
      {header: 'Asset Pocket', field: 'AssetPocket', filterMatchMode: 'in', colWidthPercentage: '150px', type: 'text'},
      {header: 'Alert Type', field: 'AlertType', filterMatchMode: 'in', colWidthPercentage: '190px', type: 'text'},
      {header: '1st Event Date', field: '1stEventDate', filterMatchMode: 'date', colWidthPercentage: '160px', type: 'date'},
      {header: 'Alert Id', field: 'AlertId', filterMatchMode: 'in', colWidthPercentage: '120px', type: 'text'},
      {header: 'Comments', field: 'comments', filterMatchMode: 'in', colWidthPercentage: '140px', type: 'text'}
  ];

  ngOnInit() {
    this.carsData = data.alertData;
  }
  update() {
    console.log('this.carsData++1222', this.carsData);
    console.log('selectedRowsData++++', this.selectedRowsData);
  }

  public OnRowsSelectionChange(event) {
    console.log('inside function', event);
    console.log('selectedRowsData++++', this.selectedRowsData);
  }

  OnRowClicked(event) {
    console.log('inside OnRowClicked', event);
  }

}
