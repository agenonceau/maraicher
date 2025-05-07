import { Injectable } from '@nestjs/common';
import { NewParcelleDto } from '../common/new.parcelle.dto';
import { ParcelleDto } from '../common/parcelle.dto';
import { ParcelleDetailsDto } from '../common/parcelle.details.dto';
import { PrismaService } from '../db/prisma.service';
import { BandesService } from './bandes.service';

@Injectable()
export class ParcellesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bandesService: BandesService,
  ) {}

  async createParcelle(newParcelleDto: NewParcelleDto): Promise<void> {
    const { nom, longueur, largeur } = newParcelleDto;

    const parcelle = await this.prisma.parcelle.create({
      data: {
        nom,
        longueur,
        largeur,
      },
    });

    await this.bandesService.addBandesToParcelle(
      parcelle.id,
      longueur,
      largeur,
    );
  }

  async getParcelles(): Promise<ParcelleDto[]> {
    const parcelles = await this.prisma.parcelle.findMany({
      include: {
        bandes: true,
      },
    });

    return parcelles.map((parcelle) => ({
      id: parcelle.id,
      nom: parcelle.nom,
      longueur: parcelle.longueur,
      largeur: parcelle.largeur,
      nombreBandes: parcelle.bandes.length,
    }));
  }

  async getParcelleDetails(id: string): Promise<ParcelleDetailsDto> {
    const parcelle = await this.prisma.parcelle.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        bandes: true,
      },
    });

    if (!parcelle) {
      throw new Error('Parcelle not found');
    }

    return {
      id: parcelle.id,
      nom: parcelle.nom,
      longueur: parcelle.longueur,
      largeur: parcelle.largeur,
      bandes: parcelle.bandes.map((bande) => ({
        id: bande.id,
        numero: bande.numero,
        longueur: bande.longueur,
        largeur: bande.largeur,
        parcelleId: bande.parcelleId,
      })),
    };
  }
}
