import { Test, TestingModule } from '@nestjs/testing';
import { ResultadoExaResolver } from './resultado-exa.resolver';
import { ResultadoExaService } from './resultado-exa.service';

describe('ResultadoExaResolver', () => {
  let resolver: ResultadoExaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadoExaResolver, ResultadoExaService],
    }).compile();

    resolver = module.get<ResultadoExaResolver>(ResultadoExaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
