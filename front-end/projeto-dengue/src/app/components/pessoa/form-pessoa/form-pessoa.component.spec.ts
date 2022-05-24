import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoaComponent } from './form-pessoa.component';

describe('FormPessoaComponent', () => {
  let component: FormPessoaComponent;
  let fixture: ComponentFixture<FormPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
