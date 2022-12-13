import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentCampaignCreateComponent } from './segment-campaign-create.component';

describe('SegmentCampaignCreateComponent', () => {
  let component: SegmentCampaignCreateComponent;
  let fixture: ComponentFixture<SegmentCampaignCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentCampaignCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentCampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
