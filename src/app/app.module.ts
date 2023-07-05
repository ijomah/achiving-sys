import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
// import { BatchUploadComponent } from './batch-upload/batch-upload.component';
import { YearComponent } from './year/year.component';




const routes: Routes = [
  {path: 'dash', loadChildren: () => import('./dashboard/dash.module').then(m => m.DashModule)},
  {path: '**', redirectTo: 'dash' }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
