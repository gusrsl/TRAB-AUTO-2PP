import { TestBed } from '@angular/core/testing';

import { ResultadoexamenService } from './resultadoexamen.service';

describe('ResultadoexamenService', () => {
  let service: ResultadoexamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoexamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
