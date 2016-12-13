import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
