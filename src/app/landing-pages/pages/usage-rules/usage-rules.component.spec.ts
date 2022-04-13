import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageRulesComponent } from './usage-rules.component';

describe('UsageRulesComponent', () => {
  let component: UsageRulesComponent;
  let fixture: ComponentFixture<UsageRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
