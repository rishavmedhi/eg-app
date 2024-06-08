import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SignupController } from './signup/signup.controller';
import { UserService } from './user/user.service';
import { SignupModule } from './signup/signup.module';
import { User, UserSchema } from 'src/schemas/user.schema';
import { SigninModule } from './signin/signin.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      autoIndex: true,
    }),
    UserModule,
    SignupModule,
    SigninModule,
    ProfileModule,
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
