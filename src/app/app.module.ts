// Framework
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, CoursesComponent ],
})
export class AppModule { }
