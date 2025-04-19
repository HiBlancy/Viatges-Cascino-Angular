import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayaDeAroComponent } from './playa-de-aro.component';

describe('PlayaDeAroComponent', () => {
  let component: PlayaDeAroComponent;
  let fixture: ComponentFixture<PlayaDeAroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayaDeAroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayaDeAroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
