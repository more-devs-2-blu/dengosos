import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFocosComponent } from './list-focos.component';

describe('ListFocosComponent', () => {
  let component: ListFocosComponent;
  let fixture: ComponentFixture<ListFocosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFocosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
