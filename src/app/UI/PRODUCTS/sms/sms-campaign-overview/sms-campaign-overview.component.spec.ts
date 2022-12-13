import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignOverviewComponent } from './sms-campaign-overview.component';

describe('SmsCampaignOverviewComponent', () => {
  let component: SmsCampaignOverviewComponent;
  let fixture: ComponentFixture<SmsCampaignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCampaignOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCampaignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
