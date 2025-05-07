import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandesListComponent } from './bandes-list.component';

describe('BandesListComponent', () => {
  let component: BandesListComponent;
  let fixture: ComponentFixture<BandesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
