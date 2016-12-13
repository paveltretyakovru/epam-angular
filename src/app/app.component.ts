import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SET_TITLE } from './app-title.reducer';
import { Component } from '@angular/core';
import '../../public/css/styles.css';

interface AppState {
  auth: boolean;
  title: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  auth: Observable<boolean>;
  title: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.title = store.select('title');
    this.auth = store.select('auth');

    // Устанавливаем заголовок
    this.store.dispatch({ type: SET_TITLE, payload: 'Главная' })
  }
}
