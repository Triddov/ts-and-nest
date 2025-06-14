import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start(){

    const PORT = process.env.APP_PORT || 80;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () => { console.log(`Listening on ${PORT}`); })
}

start()




