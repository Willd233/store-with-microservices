import { Controller, Get } from '@nestjs/common';
import { StoreDetailsService } from './store-details.service';

@Controller()
export class StoreDetailsController {
  constructor(private readonly storeDetailsService: StoreDetailsService) {}

  @Get()
  getHello(): string {
    return this.storeDetailsService.getHello();
  }
}
