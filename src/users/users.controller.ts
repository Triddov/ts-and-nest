import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.model';

import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from './dto/add-role.dto';


@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: 'Create a user' })
    @ApiResponse({ status: 201, type: User, description: 'Successfully created user' })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User], description: 'Successfully' })
    @UseGuards(JwtAuthGuard)
    @Roles("admin")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({ summary: 'Assign role' })
    @ApiResponse({ status: 200, description: 'Successfully' })
    @UseGuards(JwtAuthGuard)
    @Roles("admin")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto, @Req() req) {
        return this.userService.addRole(dto);
    }


    @ApiOperation({ summary: 'Ban a user' })
    @ApiResponse({ status: 200, description: 'Successfully' })
    @UseGuards(JwtAuthGuard)
    @Roles("admin")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto ) {
        return this.userService.ban(dto);
    }
}

