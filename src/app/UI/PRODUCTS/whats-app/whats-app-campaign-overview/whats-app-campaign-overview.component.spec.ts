import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppCampaignOverviewComponent } from './whats-app-campaign-overview.component';

describe('WhatsAppCampaignOverviewComponent', () => {
  let component: WhatsAppCampaignOverviewComponent;
  let fixture: ComponentFixture<WhatsAppCampaignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppCampaignOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppCampaignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
