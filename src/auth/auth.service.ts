import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async createToken(user: Partial<User>) {
    const res = await this.jwtService.sign(user);
    return res;
  }
  async login(user: Partial<User>) {
    const token = await this.createToken({
      username: user.username,
      password: user.password,
    });
    return { token };
  }
  async getUser(user: Partial<User>) {
    return user;
  }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
