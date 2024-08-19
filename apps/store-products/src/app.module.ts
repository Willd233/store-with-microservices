import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './global/modules/core.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI),
    ProductModule,
    CoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
