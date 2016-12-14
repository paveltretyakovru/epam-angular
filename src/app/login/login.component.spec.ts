import { TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Login component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance instanceof LoginComponent)
      .toBe(true, 'should create the LoginComponent component');
  })
})
