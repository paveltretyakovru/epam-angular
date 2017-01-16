import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import CoursesRoutingModule from './courses-routing.module';
import CoursesListComponent from './courses-list/courses-list.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';

@NgModule({
  imports: [
    CoursesRoutingModule,
  ],
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesCreateComponent,
  ]
})
export class CoursesModule { }
