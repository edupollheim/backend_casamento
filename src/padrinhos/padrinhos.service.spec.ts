import { Test, TestingModule } from '@nestjs/testing';
import { PadrinhosService } from './padrinhos.service';

describe('PadrinhosService', () => {
  let service: PadrinhosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadrinhosService],
    }).compile();

    service = module.get<PadrinhosService>(PadrinhosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
