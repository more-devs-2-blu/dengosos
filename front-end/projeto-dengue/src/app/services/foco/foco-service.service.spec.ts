import { TestBed } from '@angular/core/testing';

import { FocoServiceService } from './foco-service.service';

describe('FocoServiceService', () => {
  let service: FocoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
