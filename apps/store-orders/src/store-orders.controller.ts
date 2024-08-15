import { Controller, Get } from '@nestjs/common';
import { StoreOrdersService } from './store-orders.service';

@Controller()
export class StoreOrdersController {
  constructor(private readonly storeOrdersService: StoreOrdersService) {}

  @Get()
  getHello(): string {
    return this.storeOrdersService.getHello();
  }
}
