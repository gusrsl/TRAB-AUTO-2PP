import { Test, TestingModule } from '@nestjs/testing';
import { MedicoResolver } from './medico.resolver';
import { MedicoService } from './medico.service';

describe('MedicoResolver', () => {
  let resolver: MedicoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicoResolver, MedicoService],
    }).compile();

    resolver = module.get<MedicoResolver>(MedicoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
