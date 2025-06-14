import { Column, DataType, Model, Table } from 'sequelize-typescript';


interface UserCreateAttrs {
    email: string;
    password: string;
 //    только эти поля для создания объекта
 }


@Table({ tableName: 'users' })
export class User extends Model<User, UserCreateAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    declare id: number;  // переопределил из базового класса

    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({ type: DataType.STRING, allowNull: false})
    password: string;

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @Column({ type: DataType.STRING, allowNull: true})
    banReason: string;


}





