import { TestBed } from '@angular/core/testing';

import { BrandAccountService } from './brand-account.service';

describe('BrandAccountService', () => {
  let service: BrandAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
