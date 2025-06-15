import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';


interface UserCreateAttrs {
    email: string;
    password: string;
 //    только эти поля для создания объекта
 }


@Table({ tableName: 'users' })
export class User extends Model<User, UserCreateAttrs> {

    @ApiProperty({ example: "1", description: "id unique" })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    declare id: number;  // переопределил из базового класса

    @ApiProperty({ example: "qwerty@qwe.com", description: "email unique" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: "qwe1awsdv$#", description: "password" })
    @Column({ type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: "true", description: "banned or not" })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "said repeatedly bad words", description: "ban reason" })
    @Column({ type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}





