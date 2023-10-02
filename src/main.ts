import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ExceptionsLoggerFilter } from './utils/exceptionsLogger.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // sử dụng pipe
  //https://www.npmjs.com/package/class-transformer

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      //skipNullProperties: false,
    }),
  ); //class-transformer biến class thành object hoặc ngược lại vd : plainToClass

  //
  //sử dụng đọc cookie
  app.use(cookieParser());

  await app.listen(3000).then((_) => {
    console.log('App running in PORT', 3000);
  });
}
bootstrap();
