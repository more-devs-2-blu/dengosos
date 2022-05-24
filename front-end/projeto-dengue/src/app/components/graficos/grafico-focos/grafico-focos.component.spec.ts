import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFocosComponent } from './grafico-focos.component';

describe('GraficoFocosComponent', () => {
  let component: GraficoFocosComponent;
  let fixture: ComponentFixture<GraficoFocosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoFocosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
