import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // O Nest Automaticamente valida as entradas (Body)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();
