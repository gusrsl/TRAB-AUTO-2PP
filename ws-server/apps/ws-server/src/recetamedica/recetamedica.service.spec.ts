import { Test, TestingModule } from '@nestjs/testing';
import { RecetamedicaService } from './recetamedica.service';

describe('RecetamedicaService', () => {
  let service: RecetamedicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetamedicaService],
    }).compile();

    service = module.get<RecetamedicaService>(RecetamedicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
