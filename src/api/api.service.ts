import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    findAll(){
        return [
            {"title":"xxx"},
            {"title":"sss"},
            {"title":"bbb"},
        ]
    }
}
