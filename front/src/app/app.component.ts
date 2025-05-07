import { Component, ViewChild } from '@angular/core';
import { ParcellesListComponent } from './components/parcelles-list/parcelles-list.component';
import { ParcellesFormComponent } from './components/parcelles-form/parcelles-form.component';

@Component({
  selector: 'app-root',
  imports: [ParcellesListComponent, ParcellesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maraîcher';

  @ViewChild(ParcellesListComponent) parcellesList!: ParcellesListComponent;
  
  onParcelleAdded() {
    if (this.parcellesList) {
      this.parcellesList.loadParcelles();
    }
  }
}
