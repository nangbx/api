import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.enableCors();

  const PORT = parseInt(process.env.PORT || '5000');
  await app.listen(PORT, () => {
    console.log(
      `Server NEST has started on port ${PORT}. Open http://localhost:${PORT} to see results`,
    );
  });
}
bootstrap();
