import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserList(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getUserById(userId: User['id']) {
    return await this.prisma.user.findUnique({ where: { id: userId } });
  }
}
