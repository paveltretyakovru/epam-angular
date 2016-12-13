import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
