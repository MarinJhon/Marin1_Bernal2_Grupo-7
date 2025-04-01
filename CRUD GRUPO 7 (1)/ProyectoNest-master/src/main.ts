import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  // Puerto para cars (3000)
  await app.listen(3000);
  console.log('Cars API is running on http://localhost:3000');

  // Crear una nueva instancia para products en otro puerto (4000)
  const productApp = await NestFactory.create(AppModule);
  await productApp.listen(4000);
  console.log('Products API is running on http://localhost:4000');
}

bootstrap();
