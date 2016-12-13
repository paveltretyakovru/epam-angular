import { TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';

describe('Movies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [MoviesComponent] })
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(MoviesComponent);
    expect(fixture.componentInstance instanceof MoviesComponent)
      .toBe(true, 'should create Movies component');
  });

});
