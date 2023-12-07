import { TestBed } from '@angular/core/testing';

import { RecetamedicaService } from './recetamedica.service';

describe('RecetamedicaService', () => {
  let service: RecetamedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetamedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
