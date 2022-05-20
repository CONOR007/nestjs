import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHello() {
    return {"name":"张三","age":"12"};
  }

  @Get('new')
  getNew():string {
    return '这是nestjs里边new路由'
  }

  @Get('product')
  getProduct():string {
    return this.appService.getProduct();
  }

  @Get('setSession')
  setSession(@Request() req):string {
    // 设置session  session是基于cookie的 在cookie中就能看得到
    return req.session.username = "session信息";
  }

  @Get('getSession')
  getSession(@Request() req):string {
    console.log(req.session.username)
    return req.session.username
  }
}
