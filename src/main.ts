import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(8000).then((_) => {
    console.log('App running in PORT', 8000);
  });
}
bootstrap();
