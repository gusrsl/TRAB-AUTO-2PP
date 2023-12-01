import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMService } from './historial_m.service';

describe('HistorialMService', () => {
  let service: HistorialMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialMService],
    }).compile();

    service = module.get<HistorialMService>(HistorialMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
