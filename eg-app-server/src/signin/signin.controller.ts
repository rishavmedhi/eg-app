import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SigninUserDto } from 'src/dto/signinUser.dto';
import { UserService } from 'src/user/user.service';

@Controller('api/signin')
export class SigninController {
  constructor(private userService: UserService) {}
  @Post()
  async findUser(@Body() signinUserDto: SigninUserDto) {
    try {
      const res = await this.userService.getUser(signinUserDto);
      return {
        message: 'User successfully signed in',
        error: false,
      };
    } catch (error) {
      if (error) {
        if (error.status === 404) {
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: true,
              message: 'User with given email not found',
            },
            HttpStatus.NOT_FOUND,
          );
        }
        if (error.status === 401) {
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              message: 'Incorrect sign-in details provided',
              error: true,
            },
            HttpStatus.NOT_FOUND,
          );
        }
        // for other cases
        throw error;
      }
      // if error has a different structure
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
