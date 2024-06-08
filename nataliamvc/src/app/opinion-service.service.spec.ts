import { TestBed } from '@angular/core/testing';

import { OpinionServiceService } from './opinion-service.service';

describe('OpinionServiceService', () => {
  let service: OpinionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
