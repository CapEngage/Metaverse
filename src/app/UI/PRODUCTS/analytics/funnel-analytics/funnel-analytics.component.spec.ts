import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelAnalyticsComponent } from './funnel-analytics.component';

describe('FunnelAnalyticsComponent', () => {
  let component: FunnelAnalyticsComponent;
  let fixture: ComponentFixture<FunnelAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnelAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunnelAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
