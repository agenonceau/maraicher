import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { BandeDto } from 'src/common/bande.dto';

@Injectable()
export class BandesService {
  private readonly STANDARD_BAND_WIDTH = parseFloat(
    process.env.STANDARD_BAND_WIDTH || '1.2',
  );

  constructor(private readonly prisma: PrismaService) {}

  async addBandesToParcelle(
    parcelleId: number,
    longueur: number,
    largeur: number,
  ): Promise<void> {
    const bandes = Array.from(
      { length: Math.floor(largeur / this.STANDARD_BAND_WIDTH) },
      (_, index) => ({
        numero: index + 1,
        longueur,
        largeur: this.STANDARD_BAND_WIDTH,
        parcelleId,
      }),
    );

    await this.prisma.bande.createMany({ data: bandes });
  }

  async getBandesByParcelleId(parcelleId: number): Promise<BandeDto[]> {
    return this.prisma.bande.findMany({
      where: { parcelleId },
    });
  }
}
