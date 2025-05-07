import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcellesListComponent } from './parcelles-list.component';

describe('ParcellesListComponent', () => {
  let component: ParcellesListComponent;
  let fixture: ComponentFixture<ParcellesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcellesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcellesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
