import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';
import CoursesComponent from './courses.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: '',

        children: [
          {
            path: 'new',
            component: CoursesCreateComponent,
          }
        ],
      }
    ], // courses children

  },
];

@NgModule({
  imports: [ RouterModule.forChild(coursesRoutes) ],
  exports: [ RouterModule ],
})
export default class CoursesRoutingModule {}
