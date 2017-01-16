// Libraries modules
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CoursesModule } from './courses/courses.module';

// Reducers
import { appTitleReducer } from './app-title.reducer';
import { loginAuthReducer } from './login/login-auth.reducer';

// Services
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    CoursesModule,
    AppRoutingModule,
    StoreModule.provideStore({title: appTitleReducer, auth: loginAuthReducer})
  ],
  providers: [ AuthGuard,  LoginService],
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
  ],
})
export class AppModule { }
