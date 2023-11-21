import { Test, TestingModule } from '@nestjs/testing';
import { RecetamedicaController } from './recetamedica.controller';
import { RecetamedicaService } from './recetamedica.service';

describe('RecetamedicaController', () => {
  let controller: RecetamedicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetamedicaController],
      providers: [RecetamedicaService],
    }).compile();

    controller = module.get<RecetamedicaController>(RecetamedicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
