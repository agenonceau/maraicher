import { BandeDto } from './bande.dto';

export class ParcelleDetailsDto {
  id: number;
  nom: string;
  longueur: number;
  largeur: number;
  bandes?: BandeDto[];
}
