import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LocalStorage } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import * as dotenv from 'dotenv';
// dotenv.config();
// const jwtModule = JwtModule.registerAsync({
//   inject: [ConfigService],
//   useFactory: async (configService: ConfigService) => {
//     return {
//       secret: configService.get('SECRET', process.env.JWT_SECRET),
//       signOptions: { expiresIn: '24h' },
//     };
//   },
// });
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'abcdABCD1234554321',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStorage, ConfigService],
  // exports: [jwtModule],
})
export class AuthModule {}
