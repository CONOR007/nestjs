import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getProduct():string {
    return '这是nestjs里边自定义的页面路由'
  }
}
