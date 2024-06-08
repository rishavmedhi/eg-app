import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UserService } from 'src/user/user.service';

@Controller('api/signup')
export class SignupController {
  constructor(private userService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.userService.create(createUserDto);
      return {
        message: 'User successfully signed-up',
        error: false,
      };
    } catch (error) {
      if (error && error.errorResponse) {
        if (error.code === 11000) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: true,
              message: 'Email already exists. Please use a different email',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      } else {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: true,
            message: 'Something went wrong, please try again later.',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
