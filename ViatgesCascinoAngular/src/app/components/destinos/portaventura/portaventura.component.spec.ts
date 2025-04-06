import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaventuraComponent } from './portaventura.component';

describe('PortaventuraComponent', () => {
  let component: PortaventuraComponent;
  let fixture: ComponentFixture<PortaventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortaventuraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortaventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
