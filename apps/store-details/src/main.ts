import { NestFactory } from '@nestjs/core';
import { StoreDetailsModule } from './store-details.module';

async function bootstrap() {
  const app = await NestFactory.create(StoreDetailsModule);
  await app.listen(3000);
}
bootstrap();
