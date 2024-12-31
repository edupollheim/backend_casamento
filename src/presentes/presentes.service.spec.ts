import { Test, TestingModule } from '@nestjs/testing';
import { PresentesService } from './presentes.service';

describe('PresentesService', () => {
  let service: PresentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PresentesService,
        {
          provide: 'PresenteRepository',
          useValue: {
            // mock implementation of PresenteRepository methods
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(null),
            create: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<PresentesService>(PresentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
