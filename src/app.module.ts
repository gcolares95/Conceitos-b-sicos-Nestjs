import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMembersRepository } from './repositories/rocket-members.repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      // Injeção de dependência
      provide: RocketMembersRepository,       // Toda vez que algum arquivo Solicitar a classe RocketMembersRepository
      useClass: PrismaRocketMembersRepository // Use a classe PrismaRocketMembersRepository
    }
  ],
})
export class AppModule {}
