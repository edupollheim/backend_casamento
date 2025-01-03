import { Test, TestingModule } from '@nestjs/testing';
import { PadrinhosController } from './padrinhos.controller';
import { PadrinhosService } from './padrinhos.service';

describe('PadrinhosController', () => {
  let controller: PadrinhosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PadrinhosController],
      providers: [PadrinhosService],
    }).compile();

    controller = module.get<PadrinhosController>(PadrinhosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
