import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcellesFormComponent } from './parcelles-form.component';

describe('ParcellesFormComponent', () => {
  let component: ParcellesFormComponent;
  let fixture: ComponentFixture<ParcellesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcellesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcellesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
