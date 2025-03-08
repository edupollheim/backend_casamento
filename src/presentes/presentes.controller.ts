import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { PresentesService } from './presentes.service';
import { CreatePresenteDto } from './dto/create-presente.dto';
import { UpdatePresenteDto } from './dto/update-presente.dto';

// Controller que gerencia as requisições HTTP para a entidade Presente
// Ele faz a comunicação entre a requisição HTTP e a camada de serviço
// É responsável por receber os dados da requisição, enviar para a camada de serviço e devolver a resposta

// O decorator @Controller define a rota base para o controller
@Controller('presentes')
export class PresentesController {
  constructor(private readonly presentesService: PresentesService) {}

  @Post()
  create(@Body() createPresenteDto: CreatePresenteDto) {
    return this.presentesService.create(createPresenteDto);
  }

  @Get()
  findAll() {
    return this.presentesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const presente = await this.presentesService.findOne(id);
    if (!presente) throw new NotFoundException('Presente não encontrado');
    return presente;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePresenteDto: UpdatePresenteDto) {
    const presente =  await this.presentesService.update(id, updatePresenteDto);
    if (!presente) throw new NotFoundException('Presente não encontrado');
    return presente;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const presente = await this.presentesService.remove(id);
    if (!presente) throw new NotFoundException('Presente não encontrado');
  }
}
