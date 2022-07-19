import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// import { AuthGuard } from '@nestjs/passport';
// import { ApiTags } from '@nestjs/swagger';
// @ApiTags('验证')
// @Controller('auth')
// export class AuthController {
//   @UseGuards(AuthGuard('local'))
//   @UseInterceptors(ClassSerializerInterceptor)
//   @Post('login')
//   async login(
//     @Body() user: { username: string; password: string },
//     @Req() req,
//   ) {
//     console.log('req', req.user);
//     return req.user;
//   }
// }
