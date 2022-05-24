import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFaixaEtariaComponent } from './grafico-faixa-etaria.component';

describe('GraficoFaixaEtariaComponent', () => {
  let component: GraficoFaixaEtariaComponent;
  let fixture: ComponentFixture<GraficoFaixaEtariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoFaixaEtariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFaixaEtariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
