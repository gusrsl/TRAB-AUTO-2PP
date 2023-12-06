import { Test, TestingModule } from '@nestjs/testing';
import { CitaResolver } from './cita.resolver';
import { CitaService } from './cita.service';

describe('CitaResolver', () => {
  let resolver: CitaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitaResolver, CitaService],
    }).compile();

    resolver = module.get<CitaResolver>(CitaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
