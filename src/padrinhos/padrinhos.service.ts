import { Injectable } from '@nestjs/common';
import { CreatePadrinhoDto } from './dto/create-padrinho.dto';
import { UpdatePadrinhoDto } from './dto/update-padrinho.dto';
import { Padrinho } from './entities/padrinho.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PadrinhosService {
  constructor(
    @InjectRepository(Padrinho)
    private readonly repository: Repository<Padrinho>
  ) {}

  create(createPadrinhoDto: CreatePadrinhoDto) {
    const padrinho = this.repository.create(createPadrinhoDto);
    return this.repository.save(padrinho);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {id}});
  }

  async update(id: number, updatePadrinhoDto: UpdatePadrinhoDto) {
    const padrinho = await this.repository.findOne({where: {id}});
    if (!padrinho) return null;
    this.repository.merge(padrinho, updatePadrinhoDto);
    return this.repository.save(padrinho);
  }

  async remove(id: number) {
    const padrinho = await this.repository.findOne({where: {id}});
    if (!padrinho) return null;
    return this.repository.remove(padrinho);
  }
}
