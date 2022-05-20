import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('news')
export class NewsController {
    // 模糊匹配
    @Get('a*a') // http://localhost:3000/news/asssa
    indexA(){
        return '这是模糊匹配'
    }

    // 过滤参数
    @Get('add') // http://localhost:3000/news/add?id=1323&name=sdasdas
    add(@Query('id') query){
        console.log(query)
        // return '增加用户'
        return query
    }

    // 动态路由
    @Get(':id') // http://localhost:3000/news/123
    index(@Param() param){
        console.log(param)
        return '这是动态路由'
    }
}
