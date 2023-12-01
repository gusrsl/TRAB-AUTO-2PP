import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMResolver } from './historial_m.resolver';
import { HistorialMService } from './historial_m.service';

describe('HistorialMResolver', () => {
  let resolver: HistorialMResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialMResolver, HistorialMService],
    }).compile();

    resolver = module.get<HistorialMResolver>(HistorialMResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
