import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function start(){

    const PORT = process.env.APP_PORT || 80;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('nestjs experience')
        .setDescription('REST API documentation')
        .setVersion('1.0')
        .addTag('triddov')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => { console.log(`Listening on ${PORT}`); })
}

start()

