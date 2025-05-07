import { Bande } from "./bande";

export interface ParcelleDetails {
    id: number;
    nom: string;
    longueur: number;
    largeur: number;
    bandes: Bande[];
}