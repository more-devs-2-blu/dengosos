import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFocoComponent } from './form-foco.component';

describe('FormFocoComponent', () => {
  let component: FormFocoComponent;
  let fixture: ComponentFixture<FormFocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
