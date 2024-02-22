import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async getUserList() {
    return this.userService.getUserList();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<UserModel> {
    return this.userService.getUserById(Number(userId));
  }
}
