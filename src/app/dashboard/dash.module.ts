import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { DashboardAppComponent } from './dashboard-app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    DashboardAppComponent,
    SideBarComponent,
    NavComponent
  ],
  exports: [
    SideBarComponent,
    DashboardAppComponent,
    NavComponent
  ]
  // imports: [
  //   CommonModule
  // ]
})
export class DashModule { }
