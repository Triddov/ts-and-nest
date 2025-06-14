import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';
import { User } from './users/users.model';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWD,
            database: process.env.DB_NAME,
            models: [User],
            autoLoadModels: true,
            // logging: console.log
        }),
        UsersModule,
    ]
})
export class AppModule {

}


