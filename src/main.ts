import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    setupSwagger(app);
    await app.listen(3000);
}

=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
>>>>>>> 30ab1a157395971c39daf4fb5915b9a6e904ffee
bootstrap();
