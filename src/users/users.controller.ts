import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Bind,
  Res,
  HttpStatus,
  Query,
  DefaultValuePipe,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { HttpExceptionFilter } from 'src/section/errors.filter';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/create')
  createUser(@Body() CreateUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(CreateUserDto);
  }
  @Get()
  @UseFilters(HttpExceptionFilter)
  findAll(): Promise<UserEntity[]> {
    // throw new ForbiddenException();
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
