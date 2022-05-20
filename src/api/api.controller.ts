import { Controller, Get, Render } from '@nestjs/common';
import { ApiService } from './api.service';
@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}
    @Get()
    @Render('api/index')
    index(){
        return {
            apiList:this.apiService.findAll()
        }
    }
}
