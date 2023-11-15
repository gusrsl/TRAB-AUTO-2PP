import { Test, TestingModule } from '@nestjs/testing';
import { HistorialmedicoController } from './historialmedico.controller';
import { HistorialmedicoService } from './historialmedico.service';

describe('HistorialmedicoController', () => {
  let controller: HistorialmedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialmedicoController],
      providers: [HistorialmedicoService],
    }).compile();

    controller = module.get<HistorialmedicoController>(HistorialmedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
