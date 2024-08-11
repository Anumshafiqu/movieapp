import { TestBed } from '@angular/core/testing';

import { PopularappService } from './popularapp.service';

describe('PopularappService', () => {
  let service: PopularappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
