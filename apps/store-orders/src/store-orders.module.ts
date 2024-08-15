import { Module } from '@nestjs/common';
import { StoreOrdersController } from './store-orders.controller';
import { StoreOrdersService } from './store-orders.service';

@Module({
  imports: [],
  controllers: [StoreOrdersController],
  providers: [StoreOrdersService],
})
export class StoreOrdersModule {}
