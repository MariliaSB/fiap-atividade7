import {
    IsNotEmpty,
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsNumberString,
    IsPhoneNumber,
    IsFQDN
} from 'class-validator';

export class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsNotEmpty()
    @IsFQDN()
    site: string;

    @IsNumberString()
    @IsPhoneNumber('BR')
    phone: string;
}