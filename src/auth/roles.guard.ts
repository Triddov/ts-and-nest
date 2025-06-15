import {
    CanActivate,
    ExecutionContext, HttpException, HttpStatus,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { ROLES_KEY } from './roles.decorator';


@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private jwtService: JwtService, private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ])

            if (!requiredRoles) {
                return true;
            }

            const authHeader = req.headers.authorization;
            const [ bearer, token ] = authHeader.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'user isn`t authorized'} );
            }

            const user = this.jwtService.verify(token);
            req.user = user;

            return user.roles.some(role => requiredRoles.includes(role.value));

        } catch (err){
            throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN);
        }
    }
}
