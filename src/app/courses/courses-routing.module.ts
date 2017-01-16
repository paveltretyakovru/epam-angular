import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';
import { CoursesComponent } from './courses.component';
import CoursesListComponent from './courses-list/courses-list.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CoursesComponent,

    children: [
      {
        path: '',
        component: CoursesListComponent,
      },
      {
        path: 'new',
        component: CoursesCreateComponent,
      }
    ], // courses children

  },
];

@NgModule({
  imports: [ RouterModule.forChild(coursesRoutes) ],
  exports: [ RouterModule ],
})
export default class CoursesRoutingModule {}
