import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreOrdersService {
  getHello(): string {
    return 'Hello World!';
  }
}
