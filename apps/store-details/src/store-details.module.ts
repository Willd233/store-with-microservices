import { Module } from '@nestjs/common';
import { StoreDetailsController } from './store-details.controller';
import { StoreDetailsService } from './store-details.service';

@Module({
  imports: [],
  controllers: [StoreDetailsController],
  providers: [StoreDetailsService],
})
export class StoreDetailsModule {}
