import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectModel('Users') private readonly userModel: Model<User>
        ) {}

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new this.userModel(createUserDTO);
        return await user.save();
    }

}
