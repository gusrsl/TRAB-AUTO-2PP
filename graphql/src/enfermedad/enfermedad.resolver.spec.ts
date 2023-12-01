import { Test, TestingModule } from '@nestjs/testing';
import { EnfermedadResolver } from './enfermedad.resolver';
import { EnfermedadService } from './enfermedad.service';

describe('EnfermedadResolver', () => {
  let resolver: EnfermedadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnfermedadResolver, EnfermedadService],
    }).compile();

    resolver = module.get<EnfermedadResolver>(EnfermedadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
