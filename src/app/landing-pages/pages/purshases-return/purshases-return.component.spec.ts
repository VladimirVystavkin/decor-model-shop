import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurshasesReturnComponent } from './purshases-return.component';

describe('PurshasesReturnComponent', () => {
  let component: PurshasesReturnComponent;
  let fixture: ComponentFixture<PurshasesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurshasesReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurshasesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
