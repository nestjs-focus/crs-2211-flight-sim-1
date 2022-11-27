import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('This is the Snack Vending Machine app, it is used for tutorial on DTO, Pipes & Guards.');
}
bootstrap();
