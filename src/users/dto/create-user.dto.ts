import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: "qwerty@qwe.com", description: "email unique" })
    readonly email: string;

    @ApiProperty({ example: "qwe1awsdv$#", description: "password" })
    readonly password: string;
}
