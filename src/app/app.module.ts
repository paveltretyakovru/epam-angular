// Libraries modules
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule }  from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

// Reducers
import { appTitleReducer } from './app-title.reducer';
import { loginAuthReducer } from './login/login-auth.reducer';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore({title: appTitleReducer, auth: loginAuthReducer})
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, CoursesComponent, LoginComponent ],
})
export class AppModule { }
