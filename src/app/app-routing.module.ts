import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import {DataTableComponent} from './data-table/data-table.component';

const routes: Routes = [
  { path: 'data-table', component: DataTableComponent },
  { path: '', redirectTo: '/data-table', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
