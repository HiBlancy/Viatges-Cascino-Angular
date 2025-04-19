import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoNavidenoComponent } from './mercado-navideno.component';

describe('MercadoNavidenoComponent', () => {
  let component: MercadoNavidenoComponent;
  let fixture: ComponentFixture<MercadoNavidenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercadoNavidenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoNavidenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
