import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class NewParcelleDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom de la parcelle est requis' })
  nom: string;

  @IsNumber()
  @Min(0.1, { message: 'La longueur doit être supérieure à 0.1m' })
  longueur: number;

  @IsNumber()
  @Min(0.1, { message: 'La largeur doit être supérieure à 0.1m' })
  largeur: number;
}
