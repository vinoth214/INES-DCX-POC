import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { TableViewComponent } from './table-view/table-view.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { PrimeTableComponent } from './prime-table/prime-table.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PaginatorModule} from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TableWidgetComponent,
    TableViewComponent,
    PrimeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MultiSelectModule,
    ContextMenuModule,
    TableModule, DropdownModule, CalendarModule, ContextMenuModule, DialogModule, CheckboxModule, MultiSelectModule, PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
