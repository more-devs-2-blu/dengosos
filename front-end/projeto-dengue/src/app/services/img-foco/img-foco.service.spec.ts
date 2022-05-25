import { TestBed } from '@angular/core/testing';

import { ImgFocoService } from './img-foco.service';

describe('ImgFocoService', () => {
  let service: ImgFocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgFocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
