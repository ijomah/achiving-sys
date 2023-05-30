import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  exports: [
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
