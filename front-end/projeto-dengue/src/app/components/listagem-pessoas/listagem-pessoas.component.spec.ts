import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPessoasComponent } from './listagem-pessoas.component';

describe('ListagemPessoasComponent', () => {
  let component: ListagemPessoasComponent;
  let fixture: ComponentFixture<ListagemPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
