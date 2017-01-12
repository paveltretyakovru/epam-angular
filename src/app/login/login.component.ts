import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from '../app.component';
import { SET_TITLE } from '../app-title.reducer';
import { LoginService } from './login.service';

export class User {
  login: string;
  password: string;
}

@Component({
  templateUrl: './login.component.html',
})

export class LoginComponent {
  user: User = new User();

  constructor(
    private store: Store<AppState>,
    private loginService: LoginService,
  ) {

    this.store.dispatch({ type: SET_TITLE, payload: 'Login' })
  }

  actionLogin() {
    console.log('Login method', this.user.login, this.user.password);
    this.loginService
      .login(this.user.login, this.user.password)
      .then(
        function(value) {
          console.log(value);
        },
        function(value) {
        console.error(value);
      })
  }
}
