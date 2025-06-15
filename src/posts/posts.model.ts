import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { User } from '../users/users.model';


interface PostCreateAttrs {
    userId: number;
    title: string;
    content: string;
    image: string;
}


@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreateAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({ type: DataType.STRING, allowNull: false})
    content: string;

    @Column({ type: DataType.STRING})
    image: string;

    @BelongsTo(() => User)
    author: User;
}





