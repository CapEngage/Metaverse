import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortAnalyticsComponent } from './cohort-analytics.component';

describe('CohortAnalyticsComponent', () => {
  let component: CohortAnalyticsComponent;
  let fixture: ComponentFixture<CohortAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CohortAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
