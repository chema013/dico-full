import { Body, Controller, Get, HttpStatus, Post, Res, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post('/create')
    async createUser(@Res() res, @Body(ValidationPipe) createUserDto: CreateUserDTO) {
        const user = await this.usersService.createUser(createUserDto);
        res.status(HttpStatus.OK).json({
            messaje: 'User Successfuly Created',
            user: user
        });
    }

    @Get('/getall')
    async getUsers(@Res() res) {
        const users = await this.usersService.getUsers();
        res.status(HttpStatus.OK).json({
            messaje: 'Users',
            users: users
        });
    }

}
