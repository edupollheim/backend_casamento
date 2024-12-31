import { Test, TestingModule } from '@nestjs/testing';
import { PresentesController } from './presentes.controller';
import { PresentesService } from './presentes.service';

describe('PresentesController', () => {
  let controller: PresentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresentesController],
      providers: [PresentesService, { provide: 'PresenteRepository', useValue: {} }],
    }).compile();

    controller = module.get<PresentesController>(PresentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
