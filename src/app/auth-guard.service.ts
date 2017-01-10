import { Injectable, Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './app.component';

@Injectable()
export class AuthGuard implements CanActivate {
  auth: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.auth = store.select('auth');
  }

  canActivate() {
    let authState: boolean;

    this.auth.subscribe(v => { authState = v; });
    if(authState) return true;

    this.router.navigate(['login']);
    return false;
  }
}
