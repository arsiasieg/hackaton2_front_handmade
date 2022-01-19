import { TestBed } from '@angular/core/testing';

import { MultiserviceService } from './multiservice.service';

describe('MultiserviceService', () => {
  let service: MultiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
