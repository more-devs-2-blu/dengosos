import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCasosComponent } from './grafico-casos.component';

describe('GraficoCasosComponent', () => {
  let component: GraficoCasosComponent;
  let fixture: ComponentFixture<GraficoCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoCasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
