import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from '../app.component';
import { SET_TITLE } from '../app-title.reducer';

@Component({
  template: `Courses component`,
})
export class CoursesComponent {
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch({ type: SET_TITLE, payload: 'Courses' });
  }
}
