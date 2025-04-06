import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaAgenciaComponent } from './la-agencia.component';

describe('LaAgenciaComponent', () => {
  let component: LaAgenciaComponent;
  let fixture: ComponentFixture<LaAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaAgenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
