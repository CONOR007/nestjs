import { Controller, Get, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    index(@Response() res){
        // 设置cookie
        res.cookie('username2','我是cookie',{maxAge:1000*60*10,httpOnly:true,signed:true})
        // return '这是文章页面'   (会报错)
        res.send("这是文章页面");
    }

    @Get('add')
    add(){
        return '我是一个新增页面'
    }
}
