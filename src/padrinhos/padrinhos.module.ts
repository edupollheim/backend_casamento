import { Module } from '@nestjs/common';
import { PadrinhosService } from './padrinhos.service';
import { PadrinhosController } from './padrinhos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Padrinho } from './entities/padrinho.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Padrinho]),
  ],
  controllers: [PadrinhosController],
  providers: [PadrinhosService],
})
export class PadrinhosModule {}
