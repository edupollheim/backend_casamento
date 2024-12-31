import { Injectable } from '@nestjs/common';
import { CreatePresenteDto } from './dto/create-presente.dto';
import { UpdatePresenteDto } from './dto/update-presente.dto';
import { Repository } from 'typeorm';
import { Presente } from './entities/presente.entity';
import { InjectRepository } from '@nestjs/typeorm';

// Serviço que gerencia operações CRUD para a entidade Presente, comunicando-se com o banco de dados, implementando regras de negócio e tratando dados recebidos.

@Injectable()
export class PresentesService {
  constructor(
    @InjectRepository(Presente)
    private readonly repository: Repository<Presente>
  ){} // Injeção de dependência do repositório da entidade Presente para comunicação com o banco de dados

  create(createPresenteDto: CreatePresenteDto) {
    const presente = this.repository.create(createPresenteDto);
    return this.repository.save(presente);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, updatePresenteDto: UpdatePresenteDto) {
    const presente = await this.repository.findOneBy({ id });
    if (!presente) return null;
    this.repository.merge(presente, updatePresenteDto);
    return this.repository.save(presente);
  }

  async remove(id: string) {
    const presente = await this.repository.findOneBy({ id });
    if (!presente) return null;
    return this.repository.remove(presente);
  }
}
