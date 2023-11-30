import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoriosService } from './laboratorio.service';

describe('LaboratorioService', () => {
  let service: LaboratoriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratoriosService],
    }).compile();

    service = module.get<LaboratoriosService>(LaboratoriosService);
  });1

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
