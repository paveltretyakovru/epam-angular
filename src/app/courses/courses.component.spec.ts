import { TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';

describe('Courses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [CoursesComponent] })
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(CoursesComponent);
    expect(fixture.componentInstance instanceof CoursesComponent)
      .toBe(true, 'should create Courses component');
  });

});
