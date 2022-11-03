import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {

    async createUser(data){
        const { name } = data;

        return `Cliente ${name} cadastrado com sucesso!`;
    }
}
