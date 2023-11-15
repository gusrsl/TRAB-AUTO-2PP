import { Test, TestingModule } from '@nestjs/testing';
import { HistorialmedicoService } from './historialmedico.service';

describe('HistorialmedicoService', () => {
  let service: HistorialmedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialmedicoService],
    }).compile();

    service = module.get<HistorialmedicoService>(HistorialmedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
