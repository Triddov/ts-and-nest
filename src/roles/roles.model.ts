import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';


interface RoleCreateAttrs {
    value: string;
    description: string;
}


@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreateAttrs> {

    @ApiProperty({ example: "1", description: "id unique" })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    declare id: number;  // переопределил из базового класса

    @ApiProperty({ example: "admin", description: "user role" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({ example: "administrator", description: "comment to role" })
    @Column({ type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}
