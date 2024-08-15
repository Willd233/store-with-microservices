import { NestFactory } from '@nestjs/core';
import { StoreOrdersModule } from './store-orders.module';

async function bootstrap() {
  const app = await NestFactory.create(StoreOrdersModule);
  await app.listen(3000);
}
bootstrap();
