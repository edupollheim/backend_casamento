import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Realiza a transformação dos dados para o tipo esperado
    whitelist: true, // Remove campos não definidos no DTO
  }));
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
