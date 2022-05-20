import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path/posix';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态资源方法1
  // app.useStaticAssets('public',{
  //   prefix:'/static/'
  // })
  // 配置静态资源方法2
  app.useStaticAssets(join(__dirname,"..",'public'),{
    prefix:'/static/'
  })
  // 设置模板引擎 首先得安装模板引擎ejs
  app.setBaseViewsDir('views')
  app.setViewEngine('ejs')

  // 配置cookie中间件
  app.use(cookieParser("this signed cookies"))
  // 配置session中间件
  app.use(session({secret:'keyboard cat', cookie:{maxAge:3000,httpOnly:true},rolling:true})) // rolling只要没过期 每次请求的时候时间重新计时
  await app.listen(3000);
}
bootstrap();
