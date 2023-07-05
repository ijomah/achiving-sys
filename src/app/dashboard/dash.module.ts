import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../shared/material.module';

import { MaincontentComponent } from './components/component/maincontent.component';
import { DashboardAppComponent } from './dashboard-app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { BatchUploadComponent } from '../batch-upload/batch-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUploaderModule } from 'ngx-uploader';

const routes: Routes = [
  {path: '', component: DashboardAppComponent, 
  children: [{path: '', component: MaincontentComponent},
            {path: 'batchupload', component: BatchUploadComponent}
            ] }   
]

@NgModule({
  declarations: [
    DashboardAppComponent,
    SideBarComponent,
    NavComponent,
    BatchUploadComponent,
    MaincontentComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MaterialModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgxUploaderModule
  ]
})
export class DashModule { }
