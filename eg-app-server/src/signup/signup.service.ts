import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class SignupService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
    const res = await this.userService.create(createUserDto);

    const payload = { userEmail: res.email, sub: 1 };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
