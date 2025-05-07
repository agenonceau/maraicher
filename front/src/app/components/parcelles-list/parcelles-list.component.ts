import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BandesListComponent } from '../bandes-list/bandes-list.component';
import { Parcelle } from '../../models/parcelle';

@Component({
  selector: 'app-parcelles-list',
  templateUrl: './parcelles-list.component.html',
  styleUrls: ['./parcelles-list.component.css'],
  imports: [
    CommonModule,
    BandesListComponent
  ],
})
export class ParcellesListComponent implements OnInit {
  parcelles$!: Observable<Parcelle[]>;
  expandedParcelleId: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadParcelles();
  }

  loadParcelles(): void {
    this.parcelles$ = this.apiService.getParcelles();
  }

  toggleDetails(parcelleId: number): void {
    this.expandedParcelleId = this.expandedParcelleId === parcelleId ? null : parcelleId;
  }
}
