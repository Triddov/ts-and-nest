import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from './roles.model';
import { User } from '../users/users.model';


@Table({ tableName: 'user-roles', timestamps: false })
export class UserRoles extends Model<UserRoles> {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER})
    userId: number;
}
