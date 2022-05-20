import { Body, Controller, Get, Post, Query,Request } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    index(){
        return '用户中心'
    }

    @Get('add') // http://localhost:3000/user/add?id=1323&name=sdasdas
    add(@Query() query){
        console.log(query)
        // return '增加用户'
        return query
    }

    @Get('edit') // http://localhost:3000/user/edit?id=1323&name=sdasdas
    edit(@Request() req){
        console.log(req.query)
        // return '增加用户'
        return '通过Request回去get传参'
    }

    @Post('create')
    create(@Body() data , @Query() query){
        console.log('触发了post')
        console.log(data)
        console.log(query)
        return '我是post方法'
    }

    @Get('cookie')
    cookie(@Request() req){
        console.log(req.cookies.username2)
        console.log(req.signedCookies.username2) // 获取加密后的cookie
        return req.cookies.username2
    }
}
