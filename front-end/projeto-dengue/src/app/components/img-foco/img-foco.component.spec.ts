import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFocoComponent } from './img-foco.component';

describe('ImgFocoComponent', () => {
  let component: ImgFocoComponent;
  let fixture: ComponentFixture<ImgFocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgFocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
