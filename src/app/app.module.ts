import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
//import { NavComponent } from './dashboard/components/nav/nav.component';
//import { SideBarComponent } from './dashboard/components/side-bar/side-bar.component';
import { BatchUploadComponent } from './batch-upload/batch-upload.component';
import { YearComponent } from './year/year.component';
import { MaterialModule } from './shared/material.module';
import { DashModule } from './dashboard/dash.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    //NavComponent,
    // SideBarComponent,
    BatchUploadComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MaterialModule,
    DashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
