import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SET_TITLE } from './app-title.reducer';
import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';

interface AppState {
  title: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.title = store.select('title');

    // Устанавливаем заголовок
    this.store.dispatch({ type: SET_TITLE, payload: 'Главная' })
  }
}
