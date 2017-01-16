import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AppState } from '../app.component';
import { SET_AUTH } from './login-auth.reducer';
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
    private router: Router,
    private loginService: LoginService,
  ) {

    this.store.dispatch({ type: SET_TITLE, payload: 'Login' })
  }

  actionLogin() {
    this.loginService
      .login(this.user.login, this.user.password)
      .then(
        (value) => {
          console.info('Success auth');
          this.store.dispatch({ type: SET_AUTH, payload: true });
          this.router.navigate(['courses']);
        },
        (value) => {
          this.store.dispatch({ type: SET_AUTH, payload: false });
      })
  }
}
