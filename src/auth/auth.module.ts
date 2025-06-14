import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';



@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      UsersModule,
      JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              secret: configService.get<string>('JWT_PRIVATE_KEY') || 'SECRET',
              signOptions: { expiresIn: '12h' },
          }),
      }),
  ]
})
export class AuthModule {}
