import { TestBed } from '@angular/core/testing';

import { DBAuthService } from './auth.service';

describe('DBAuthService', () => {
  let service: DBAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
