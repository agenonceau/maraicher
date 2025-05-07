import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Bande } from '../../models/bande';
import { ParcelleDetails } from '../../models/parcelle.details';

@Component({
  selector: 'app-bandes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bandes-list.component.html',
  styleUrls: ['./bandes-list.component.css']
})
export class BandesListComponent implements OnInit {
  @Input() parcelleId!: number;
  parcelleDetails$!: Observable<ParcelleDetails>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.parcelleId) {
      this.loadBandes();
    }
  }

  loadBandes(): void {
    this.parcelleDetails$ = this.apiService.getParcelleDetails(this.parcelleId);
  }

  calculateSurface(bande: Bande): number {
    return bande.longueur * bande.largeur;
  }
}