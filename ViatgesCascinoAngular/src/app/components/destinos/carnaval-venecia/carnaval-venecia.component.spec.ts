import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnavalVeneciaComponent } from './carnaval-venecia.component';

describe('CarnavalVeneciaComponent', () => {
  let component: CarnavalVeneciaComponent;
  let fixture: ComponentFixture<CarnavalVeneciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarnavalVeneciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnavalVeneciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
