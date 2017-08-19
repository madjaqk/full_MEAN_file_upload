import { TestBed, inject } from '@angular/core/testing';

import { RatService } from './rat.service';

describe('RatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatService]
    });
  });

  it('should ...', inject([RatService], (service: RatService) => {
    expect(service).toBeTruthy();
  }));
});
