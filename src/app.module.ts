import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import * as process from 'node:process';
const dotenv = require('dotenv')

dotenv.config();


@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWD,
            database: 'ts-and-nest',
            models: [],
            autoLoadModels: true
        }),
    ]
})
export class AppModule {

}


