import { Test, TestingModule } from '@nestjs/testing';
import { RecetaResolver } from './receta.resolver';
import { RecetaService } from './receta.service';

describe('RecetaResolver', () => {
  let resolver: RecetaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetaResolver, RecetaService],
    }).compile();

    resolver = module.get<RecetaResolver>(RecetaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
