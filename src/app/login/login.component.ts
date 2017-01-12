import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from '../app.component';

export class User {
  login: string;
  password: string;
}

@Component({
  templateUrl: './login.component.html',
})

export class LoginComponent {
  user: User = new User();

  actionLogin() {
    console.log('Login method', this.user.login, this.user.password);
  }
}
