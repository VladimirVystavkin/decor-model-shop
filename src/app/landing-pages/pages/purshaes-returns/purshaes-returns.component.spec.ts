import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurshaesReturnsComponent } from './purshaes-returns.component';

describe('PurshaesReturnsComponent', () => {
  let component: PurshaesReturnsComponent;
  let fixture: ComponentFixture<PurshaesReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurshaesReturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurshaesReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
