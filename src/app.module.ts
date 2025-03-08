import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PresentesModule } from './presentes/presentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadosModule } from './recados/recados.module';
import { PadrinhosModule } from './padrinhos/padrinhos.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Para desenvolvimento
      // Para produção, é recomendado desativar a sincronização automática e rodar as migrations manualmente
    }), // Configuração a nível de aplicação
    PresentesModule, RecadosModule, PadrinhosModule, PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
