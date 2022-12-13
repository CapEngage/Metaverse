import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPushCampaignOverviewComponent } from './web-push-campaign-overview.component';

describe('WebPushCampaignOverviewComponent', () => {
  let component: WebPushCampaignOverviewComponent;
  let fixture: ComponentFixture<WebPushCampaignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPushCampaignOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPushCampaignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
