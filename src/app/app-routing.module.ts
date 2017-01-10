import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

const appRoutes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CoursesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}
