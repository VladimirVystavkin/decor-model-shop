import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopirationComponent } from './copiration.component';

describe('CopirationComponent', () => {
  let component: CopirationComponent;
  let fixture: ComponentFixture<CopirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopirationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
