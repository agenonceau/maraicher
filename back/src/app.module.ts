import { Module } from '@nestjs/common';
import { ParcellesController } from './controlleurs/parcelles.controller';
import { ParcellesService } from './services/parcelles.service';
import { PrismaService } from './db/prisma.service';
import { BandesService } from './services/bandes.service';

@Module({
  imports: [],
  controllers: [ParcellesController],
  providers: [BandesService, ParcellesService, PrismaService],
})
export class AppModule {}
