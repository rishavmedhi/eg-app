import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { SigninUserDto } from 'src/dto/signinUser.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getUser(signinUserDto: SigninUserDto): Promise<any> {
    const user = await this.userModel.find({
      email: signinUserDto.email,
    });
    if (user && user.length === 0) {
      throw new NotFoundException();
    }
    if (user[0].password !== signinUserDto.password) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
