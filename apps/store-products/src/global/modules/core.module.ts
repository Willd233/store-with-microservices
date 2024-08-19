// core.module.ts
import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [],
})
export class CoreModule {}
