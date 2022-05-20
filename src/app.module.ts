import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import { InfoController } from './info/info.controller';
import { ApiService } from './api/api.service';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController, NewsController, InfoController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule {}
