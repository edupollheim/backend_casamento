import { Injectable } from '@nestjs/common';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  constructor (
    @InjectRepository(Recado)
    private readonly repository: Repository<Recado>
  ) {}

  create(createRecadoDto: CreateRecadoDto) {
    const recado = this.repository.create(createRecadoDto);
    return this.repository.save(recado);
  }

  findAll() {
    const recados = this.repository.find();
    return recados;
  }

  findOne(id: string) {
    const recado = this.repository.findOneBy({ id });
    return recado;
  }

  async update(id: string, updateRecadoDto: UpdateRecadoDto) {
    const recado = await this.repository.findOneBy({ id });
    if (!recado) return null;
    this.repository.merge(recado, updateRecadoDto);
    return this.repository.save(recado);
  }

  async remove(id: string) {
    const recado = await this.repository.findOneBy({ id });
    if (!recado) return null;
    return this.repository.remove(recado);
  }
}
