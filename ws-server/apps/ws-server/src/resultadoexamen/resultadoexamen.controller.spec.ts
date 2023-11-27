import { Test, TestingModule } from '@nestjs/testing';
import { ResultadoexamenController } from './resultadoexamen.controller';
import { ResultadoexamenService } from './resultadoexamen.service';

describe('ResultadoexamenController', () => {
  let controller: ResultadoexamenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultadoexamenController],
      providers: [ResultadoexamenService],
    }).compile();

    controller = module.get<ResultadoexamenController>(ResultadoexamenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
