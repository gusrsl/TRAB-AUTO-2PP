import { Test, TestingModule } from '@nestjs/testing';
import { ResultadoExaService } from './resultado-exa.service';

describe('ResultadoExaService', () => {
  let service: ResultadoExaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadoExaService],
    }).compile();

    service = module.get<ResultadoExaService>(ResultadoExaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
