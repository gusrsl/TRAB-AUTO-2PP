import { Test, TestingModule } from '@nestjs/testing';
import { LaboratorioResolver } from './laboratorio.resolver';
import { LaboratorioService } from './laboratorio.service';

describe('LaboratorioResolver', () => {
  let resolver: LaboratorioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratorioResolver, LaboratorioService],
    }).compile();

    resolver = module.get<LaboratorioResolver>(LaboratorioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
