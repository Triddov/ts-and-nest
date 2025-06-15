import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as process from 'node:process';
import * as path from 'path';

import { UsersModule } from './users/users.module';
import { User } from './users/users.model';

import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';

import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';

import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        ServeStaticModule.forRoot({
           rootPath: path.resolve('static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWD,
            database: process.env.DB_NAME,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true,
            logging: console.log
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})
export class AppModule {

}
