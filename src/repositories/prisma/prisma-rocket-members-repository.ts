// Implementação
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-members.repository';
import { randomUUID } from 'node:crypto';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService) {}

  // Método para criar membro
  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
