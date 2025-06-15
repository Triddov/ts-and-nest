import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: "qwerty@qwe.com", description: "email unique" })
    @IsString({ message: 'must be string' })
    @IsEmail({}, { message: 'must be valid email address' })
    readonly email: string;

    @ApiProperty({ example: "qwe1awsdv$#", description: "password" })
    @IsString({ message: 'must be string' })
    @Length(5, 255, { message: 'must be greater than 5 and less than 255' })
    readonly password: string;
}
