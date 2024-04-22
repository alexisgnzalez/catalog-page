import { TestBed } from '@angular/core/testing';

import { HttpCaller } from './http-caller.service';

describe('HttpCaller', () => {
  let service: HttpCaller;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCaller);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
