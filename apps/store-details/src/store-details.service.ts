import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreDetailsService {
  getHello(): string {
    return 'Hello World!';
  }
}
