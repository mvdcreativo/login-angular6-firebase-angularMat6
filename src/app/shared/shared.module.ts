import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatMenuModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatGridListModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule
  ],
  declarations: [],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule   
  ],
})
export class SharedModule { }
