import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagesLayoutComponent } from './landing-pages-layout.component';

describe('LandingPagesLayoutComponent', () => {
  let component: LandingPagesLayoutComponent;
  let fixture: ComponentFixture<LandingPagesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
