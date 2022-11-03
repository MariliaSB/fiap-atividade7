import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('register')
export class RegisterController {

    constructor(private readonly registerService: RegisterService) {}

    @Post()
    async createUser(@Body() req: CreateUserDTO): Promise<string> {
        return this.registerService.createUser(req);
    }

}
