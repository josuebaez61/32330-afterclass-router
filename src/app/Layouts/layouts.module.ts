import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { CleanLayoutComponent } from './clean-layout/clean-layout.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    CleanLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    DashboardLayoutComponent
  ]
})
export class LayoutsModule { }
