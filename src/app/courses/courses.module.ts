import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CoursesComponent from './courses.component';
import CoursesRoutingModule from './courses-routing.module';
import { CoursesCreateComponent } from './courses-create/courses-create.component';

@NgModule({
  imports: [
    CoursesRoutingModule,
  ],
  declarations: [
    CoursesComponent,
    CoursesCreateComponent,
  ]
})
export class CoursesModule { }
