import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentCampaignOverviewComponent } from './segment-campaign-overview.component';

describe('SegmentCampaignOverviewComponent', () => {
  let component: SegmentCampaignOverviewComponent;
  let fixture: ComponentFixture<SegmentCampaignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentCampaignOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentCampaignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
