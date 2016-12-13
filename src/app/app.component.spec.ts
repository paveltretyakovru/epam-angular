import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

describe('App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore({}) ],
      declarations: [ AppComponent ],
    });
  });

  it ('should work', () => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, CoursesComponent ],
      imports: [ RouterTestingModule.withRoutes([
        { path: 'courses', component: CoursesComponent }
      ])],
    })

    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent)
      .toBe(true, 'should create AppComponent');
  });
});
