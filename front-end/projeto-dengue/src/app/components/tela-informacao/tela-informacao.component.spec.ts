import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInformacaoComponent } from './tela-informacao.component';

describe('TelaInformacaoComponent', () => {
  let component: TelaInformacaoComponent;
  let fixture: ComponentFixture<TelaInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInformacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
