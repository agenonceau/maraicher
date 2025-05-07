import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-parcelles-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './parcelles-form.component.html',
  styleUrls: ['./parcelles-form.component.css']
})
export class ParcellesFormComponent {
  @Output() parcelleAdded = new EventEmitter<void>();
  
  parcelleForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  errorMessage = '';
  
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.parcelleForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(50)]],
      longueur: ['', [Validators.required, Validators.min(0.1)]],
      largeur: ['', [Validators.required, Validators.min(0.1)]]
    });
  }
  
  onSubmit(): void {
    this.errorMessage = '';
    this.submitSuccess = false;
    
    if (this.parcelleForm.invalid) {
      Object.keys(this.parcelleForm.controls).forEach(key => {
        const control = this.parcelleForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    
    this.isSubmitting = true;
    
    this.apiService.createParcelle(this.parcelleForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        
        this.parcelleForm.reset();
        
        this.parcelleAdded.emit();
        
        setTimeout(() => {
          this.submitSuccess = false;
        }, 3000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = 'Erreur lors de la création de la parcelle. Veuillez réessayer.';
        console.error('Erreur de création de parcelle:', error);
      }
    });
  }
  
  hasError(controlName: string, errorName: string): boolean {
    const control = this.parcelleForm.get(controlName);
    return !!(control && control.touched && control.hasError(errorName));
  }
}