import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
    readonly value: string;
    readonly userId: number;
}


