import { TestBed } from '@angular/core/testing';

import { Multiservice } from './multi.service';

describe('MultiserviceService', () => {
  let service: Multiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Multiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
