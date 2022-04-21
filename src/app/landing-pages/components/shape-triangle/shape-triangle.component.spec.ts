import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeTriangleComponent } from './shape-triangle.component';

describe('ShapeTriangleComponent', () => {
  let component: ShapeTriangleComponent;
  let fixture: ComponentFixture<ShapeTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeTriangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
