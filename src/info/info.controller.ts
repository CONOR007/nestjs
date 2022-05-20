import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';

@Controller('info')
export class InfoController {
    @Get()
    @Render('info/index')
    index(){
        return {}
    }

    @Post('doAdd')
    doAdd(@Body() body, @Response() res){
        console.log(body)
        res.redirect('/info') // 路由跳转
    }
}
