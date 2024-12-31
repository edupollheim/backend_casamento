import { Module } from '@nestjs/common';
import { PresentesService } from './presentes.service';
import { PresentesController } from './presentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presente } from './entities/presente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presente])],
  controllers: [PresentesController],
  providers: [PresentesService],
})
export class PresentesModule {}
