import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { PadrinhosService } from './padrinhos.service';
import { CreatePadrinhoDto } from './dto/create-padrinho.dto';
import { UpdatePadrinhoDto } from './dto/update-padrinho.dto';

@Controller('padrinhos')
export class PadrinhosController {
  constructor(private readonly padrinhosService: PadrinhosService) {}

  @Post()
  create(@Body() createPadrinhoDto: CreatePadrinhoDto) {
    return this.padrinhosService.create(createPadrinhoDto);
  }

  @Get()
  findAll() {
    return this.padrinhosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const padrinho = await this.padrinhosService.findOne(+id);
    if (!padrinho) throw new NotFoundException('Padrinho não encontrado');
    return padrinho;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePadrinhoDto: UpdatePadrinhoDto) {
    const padrinho =  await this.padrinhosService.update(+id, updatePadrinhoDto);
    if (!padrinho) throw new NotFoundException('Padrinho não encontrado');
    return padrinho;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const padrinho = await this.padrinhosService.remove(+id);
    if (!padrinho) throw new NotFoundException('Padrinho não encontrado');
  }
}
