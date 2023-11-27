import { Test, TestingModule } from '@nestjs/testing';
import { ResultadoexamenService } from './resultadoexamen.service';

describe('ResultadoexamenService', () => {
  let service: ResultadoexamenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadoexamenService],
    }).compile();

    service = module.get<ResultadoexamenService>(ResultadoexamenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
