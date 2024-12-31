import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const recado = this.recadosService.findOne(id);
    if (!recado) throw new NotFoundException('Recado não encontrado');
    return recado;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadoDto) {
    const recado =  await this.recadosService.update(id, updateRecadoDto);
    if (!recado) throw new NotFoundException('Recado não encontrado');
    return recado;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const recado = await this.recadosService.remove(id);
    if (!recado) throw new NotFoundException('Recado não encontrado');
  }
}
