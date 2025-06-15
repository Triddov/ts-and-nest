import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      forwardRef(() => UsersModule),
      JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              secret: configService.get<string>('JWT_PRIVATE_KEY') || 'SECRET',
              signOptions: { expiresIn: '12h' },
          }),
      }),
  ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
